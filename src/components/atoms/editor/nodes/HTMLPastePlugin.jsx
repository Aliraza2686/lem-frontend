import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createHTMLBlockNode } from './HTMLBlockNode';
import { 
    COMMAND_PRIORITY_HIGH, 
    PASTE_COMMAND, 
    $getSelection, 
    $isRangeSelection,
    // $createParagraphNode,
    // $createTextNode
} from 'lexical';

// In HTMLPastePlugin.js

// ... (imports remain the same) ...
import { $generateNodesFromDOM } from '@lexical/html'
export default function HTMLPastePlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        const handlePaste = (event) => {
            const clipboardData = event.clipboardData;
            if (!clipboardData) return false;

            const htmlData = clipboardData.getData('text/html');
            if (!htmlData) return false;

            // Define rich content to override Lexical's default handler
            const isRichContent = htmlData.includes('<table') || htmlData.includes('<img') || htmlData.match(/<[^>]+ (style|class)=/i);

            if (!isRichContent) {
                // If it's simple text, let default Lexical paste handle it for full editability
                return false; 
            }

            event.preventDefault();

            editor.update(() => {
                const selection = $getSelection();
                if (!$isRangeSelection(selection)) return;

                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlData, 'text/html');
                const contentRoot = doc.body || doc.documentElement;

                // --- 🚀 DOM TRANSFORMATION STEP ---
                // We modify the pasted DOM *before* converting it to Lexical nodes.
                
                contentRoot.querySelectorAll('table').forEach(tableElement => {
                    // 1. For tables: We wrap the entire table in a single <span>
                    //    that contains the full, styled HTML string.
                    const htmlContent = tableElement.outerHTML;
                    const _blockNode = $createHTMLBlockNode(htmlContent);
                    
                    // IMPORTANT: Replace the table element in the DOM with a dummy node 
                    // that Lexical's DOM converter will recognize.
                    const spanPlaceholder = document.createElement('span');
                    spanPlaceholder.setAttribute('data-lexical-html', htmlContent);
                    spanPlaceholder.className = 'lexical-html-placeholder';
                    tableElement.replaceWith(spanPlaceholder);
                });

                // (You would repeat this for images if you need a custom image node)

                // 2. Lexical Conversion: Converts the *modified* DOM tree.
                //    - Tables (now placeholders) will be converted via a custom import rule (see below).
                //    - All other text/paragraphs are converted to standard, editable Lexical nodes.
                const nodesToInsert = $generateNodesFromDOM(editor, doc);

                if (nodesToInsert.length > 0) {
                    selection.insertNodes(nodesToInsert);
                }
            });

            return true;
        };

        return editor.registerCommand(
            PASTE_COMMAND,
            handlePaste,
            COMMAND_PRIORITY_HIGH
        );
    }, [editor]);

    return null;
}