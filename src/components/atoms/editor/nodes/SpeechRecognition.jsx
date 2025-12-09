// SpeechRecognition.js

import {
    $getSelection,
    $isRangeSelection,
    COMMAND_PRIORITY_EDITOR,
    REDO_COMMAND,
    UNDO_COMMAND,
    createCommand
} from 'lexical';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect, useRef, useState } from 'react';
import useReport from './useReport';

export const SPEECH_TO_TEXT_COMMAND = createCommand('SPEECH_TO_TEXT_COMMAND');

const VOICE_COMMANDS = {
    '\n': ({ selection }) => selection.insertParagraph(),
    redo: ({ editor }) => editor.dispatchCommand(REDO_COMMAND, undefined),
    undo: ({ editor }) => editor.dispatchCommand(UNDO_COMMAND, undefined)
};

export const SUPPORT_SPEECH_RECOGNITION =
    typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

function SpeechRecognition() {
    const [editor] = useLexicalComposerContext();
    const [isEnabled, setIsEnabled] = useState(false);
    const isEnabledRef = useRef(false);

    const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = useRef(null);
    const report = useReport();

    useEffect(() => {
        isEnabledRef.current = isEnabled;
    }, [isEnabled]);

    useEffect(() => {
        if (!SpeechRecognitionConstructor) return;

        if (recognition.current === null) {
            recognition.current = new SpeechRecognitionConstructor();
            recognition.current.continuous = true;
            recognition.current.interimResults = false;
            recognition.current.lang = 'en-US';
            recognition.current.maxAlternatives = 1;
            
            recognition.current.onresult = (event) => {
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const result = event.results[i];
                    const transcript = result[0].transcript;
                    const isFinal = result.isFinal;

                    if (!isFinal) {
                        report(`<span style="opacity: 0.6">${transcript}</span>`);
                    } else {
                        report(transcript);
                        
                        editor.update(() => {
                            const selection = $getSelection();
                            
                            if ($isRangeSelection(selection)) {
                                const key = transcript.toLowerCase().trim();
                                const command = VOICE_COMMANDS[key];

                                if (command) {
                                    command({ editor, selection });
                                } else if (/\s*\n\s*/.test(transcript)) {
                                    selection.insertParagraph();
                                } else {
                                    const needsSpace = selection.anchor.offset > 0;
                                    const textToInsert = needsSpace ? ' ' + transcript : transcript;
                                    selection.insertText(textToInsert);
                                }
                            }
                        });
                    }
                }
            };

            recognition.current.onerror = (event) => {
                if (event.error === 'no-speech') {
                    return;
                }
                
                if (event.error === 'audio-capture' || event.error === 'not-allowed') {
                    setIsEnabled(false);
                }
            };

            recognition.current.onend = () => {
                if (isEnabledRef.current) {
                    // setTimeout(() => {
                        if (recognition.current && isEnabledRef.current) {
                            try {
                                recognition.current.start();
                            } catch (e) {
                                // Already running
                            }
                        }
                    // }, 100);
                }
            };
        }

        if (isEnabled) {
            try {
                recognition.current.start();
            } catch (e) {
                // Already running
            }
        } else {
            try {
                recognition.current.stop();
            } catch (e) {
                // Already stopped
            }
        }

        return () => {
            if (recognition.current) {
                try {
                    recognition.current.stop();
                } catch (e) {
                    // Already stopped
                }
            }
        };
    }, [editor, isEnabled, SpeechRecognitionConstructor, report]);

    useEffect(() => {
        return editor.registerCommand(
            SPEECH_TO_TEXT_COMMAND,
            (value) => {
                setIsEnabled(value);
                return true;
            },
            COMMAND_PRIORITY_EDITOR
        );
    }, [editor]);

    return null;
}

export default SUPPORT_SPEECH_RECOGNITION ? SpeechRecognition : () => null;