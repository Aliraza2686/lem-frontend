/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
// import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';

import {
    $getSelection,
    $isRangeSelection,
    FORMAT_TEXT_COMMAND,
    UNDO_COMMAND,
    REDO_COMMAND,
    $createParagraphNode,
    $getRoot,
    $createTextNode,
    FORMAT_ELEMENT_COMMAND,
    INDENT_CONTENT_COMMAND,
    OUTDENT_CONTENT_COMMAND,
    $isTextNode
} from 'lexical';
import {
    $createHeadingNode,
    $createQuoteNode,
    $isHeadingNode,
    $isQuoteNode,
    HeadingNode,
    QuoteNode
} from '@lexical/rich-text';
import {
    INSERT_UNORDERED_LIST_COMMAND,
    INSERT_ORDERED_LIST_COMMAND,
    REMOVE_LIST_COMMAND,
    INSERT_CHECK_LIST_COMMAND,
    $isListNode,
    ListNode,
    ListItemNode
} from '@lexical/list';
import { TOGGLE_LINK_COMMAND, LinkNode } from '@lexical/link';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { $createHorizontalRuleNode, HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode';
import { CodeNode } from '@lexical/code';
import { TableNode, TableCellNode, TableRowNode, INSERT_TABLE_COMMAND } from '@lexical/table';

import ImagePlugin from './nodes/ImagePlugin';
import DraggableBlockPlugin from './nodes/DraggableBlockPlugin';
import TableActionMenuPlugin from './nodes/TableActionMenuPlugin';
import HTMLPastePlugin from './nodes/HTMLPastePlugin';

import {
    ArrowUturnLeftIcon,
    ArrowUturnRightIcon,
    ListBulletIcon,
    LinkIcon,
    // PhotoIcon,
    MinusIcon,
    ChatBubbleLeftRightIcon,
    Bars3BottomLeftIcon,
    Bars3CenterLeftIcon,
    Bars3Icon,
    // CheckCircleIcon,
    // TableCellsIcon,
    CodeBracketIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
    XMarkIcon,
    NumberedListIcon,
    MicrophoneIcon,
    BoldIcon,
    ItalicIcon,
    UnderlineIcon,
    StrikethroughIcon,
    H1Icon,
    H2Icon,
    H3Icon,
    ArrowsRightLeftIcon,
    TrashIcon
} from '@heroicons/react/24/outline';
// import { ImageNode } from './nodes/ImageNode';
import { HTMLBlockNode, $createHTMLBlockNode } from './nodes/HTMLBlockNode';
import TableCellResizer from './nodes/TableCellResizer';
import SpeechRecognition, { SPEECH_TO_TEXT_COMMAND } from './nodes/SpeechRecognition';
import SimpleSelectMenu from '../simple-select-menu/SimpleSelectMenu';

const ToolbarButton = ({
    onClick,
    title,
    active,
    children,
    disabled,
    removeBorders = false
}) => (
    <button
        type="button"
        onClick={onClick}
        title={title}
        disabled={disabled}
        className={`p-2.5 min-w-[25px] md:min-w-[45px] flex justify-center items-center rounded-xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed ${(active
            ? 'bg-[#b695f8] text-white shadow-md shadow-[#b695f8]/30 scale-105'
            : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200',
            removeBorders ? '!border-none' : '')
            }`}
    >
        {children}
    </button>
);

const ToolbarDivider = () => <div className="w-px h-8 bg-gray-200" />;


function InitialContentPlugin({ defaultValue, _signatureHtml, forceUpdate, _fromMail, setForceUpdate }) {
    const [editor] = useLexicalComposerContext();
    const [initialized, setInitialized] = useState(false);

    function findAllSignatureElements(dom) {
        const allNodes = Array.from(dom.querySelectorAll('*'));
        const foundSignatures = [];

        // Priority order: Find the most specific signature container first
        const priorities = [
            // 1. Exact class matches (most reliable)
            (el) => {
                const classes = Array.from(el.classList);
                return classes.some(
                    (c) =>
                        c.toLowerCase() === 'gmail_signature' ||
                        c.toLowerCase() === 'outlook_signature' ||
                        c.toLowerCase() === 'signature'
                );
            },
            // 2. data-signature-block attribute
            (el) => el.hasAttribute('data-signature-block'),
            // 3. data attributes with signature value
            (el) =>
                Array.from(el.attributes).some((attr) => {
                    const attrName = attr.name.toLowerCase();
                    const attrValue = attr.value.toLowerCase();
                    return attrName.startsWith('data-') && attrValue.includes('signature');
                }),
            // 4. Classes containing 'signature' (but not 'prefix')
            (el) => {
                const classes = Array.from(el.classList);
                return classes.some((c) => {
                    const lower = c.toLowerCase();
                    return (
                        lower.includes('signature') ||
                        lower?.includes('gmail-html-block-container') ||
                        (lower?.includes('gmail_signature') && !lower.includes('prefix'))
                    );
                });
            },
            // 5. ID containing 'signature'
            (el) => {
                const id = (el.id || '').toLowerCase();
                return id.includes('signature');
            }
        ];

        // Check each node against all priorities
        allNodes.forEach((el) => {
            for (const checkFn of priorities) {
                if (checkFn(el)) {
                    // Check if this element is not already contained in a found signature
                    const isNested = foundSignatures.some((sig) => sig.contains(el));
                    if (!isNested) {
                        foundSignatures.push(el);
                    }
                    break; // Found match, no need to check other priorities for this element
                }
            }
        });

        return foundSignatures;
    }

    useEffect(() => {
        if (initialized) return;

        editor.update(() => {
            const root = $getRoot();
            root.clear();

            const parser = new DOMParser();
            const dom = parser.parseFromString(defaultValue, 'text/html');

            // ---- SIGNATURE HANDLING ----
            const signatureElements = findAllSignatureElements(dom);
            const signatureHtmlBlocks = [];

            if (signatureElements.length > 0) {
                signatureElements.forEach((signatureEl) => {
                    // Clone to avoid modifying original, ensure inline styles are preserved
                    const clone = signatureEl.cloneNode(true);

                    // Ensure block-level display to prevent layout issues
                    if (!clone.style.display || clone.style.display === 'inline') {
                        clone.style.display = 'block';
                    }

                    // Preserve any table/flex/grid layouts for social icons
                    const tables = clone.querySelectorAll('table');
                    tables.forEach((table) => {
                        if (!table.style.display) {
                            table.style.display = 'table';
                        }
                    });

                    const flexContainers = clone.querySelectorAll('[style*="display: flex"], [style*="display:flex"]');
                    flexContainers.forEach((el) => {
                        if (!el.style.display.includes('flex')) {
                            el.style.display = 'flex';
                        }
                    });

                    signatureHtmlBlocks.push(clone.outerHTML);
                    signatureEl.remove(); // remove from normal flow
                });
            }

            // ---- NORMAL CONTENT ----
            const nodes = $generateNodesFromDOM(editor, dom);

            // If there's content, append it
            if (nodes.length > 0) {
                nodes.forEach((n) => {
                    // Check if this is an HTMLBlockNode (single HTML node)
                    if (n.getType && n.getType() === 'html-block') {
                        // Add empty paragraph before HTML block
                        const spacerBefore = $createParagraphNode();
                        spacerBefore.append($createTextNode(''));
                        root.append(spacerBefore);

                        // Add the HTML block
                        root.append(n);

                        // Add empty paragraph after HTML block
                        const spacerAfter = $createParagraphNode();
                        spacerAfter.append($createTextNode(''));
                        root.append(spacerAfter);
                    } else {
                        // Regular node, just append
                        root.append(n);
                    }
                });
            } else {
                // If no content, add an empty paragraph so user can type
                const emptyPara = $createParagraphNode();
                emptyPara.append($createTextNode(''));
                root.append(emptyPara);
            }

            // ---- INSERT ALL SIGNATURES AS SINGLE NODES ----
            if (signatureHtmlBlocks.length > 0) {
                signatureHtmlBlocks.forEach((signatureHtml) => {
                    // Add spacing before signature
                    const spacerBefore = $createParagraphNode();
                    spacerBefore.append($createTextNode(''));
                    root.append(spacerBefore);

                    // Add the signature as HTML block
                    const block = $createHTMLBlockNode(signatureHtml);
                    root.append(block);

                    // IMPORTANT: Add an empty paragraph AFTER signature so user can type below
                    const spacerAfter = $createParagraphNode();
                    spacerAfter.append($createTextNode(''));
                    root.append(spacerAfter);
                });
            }

            setForceUpdate(false);
        });

        setInitialized(true);
    }, [defaultValue, forceUpdate]);

    return null;
}

function _I__itialContentPlugin({ defaultValue, signatureHtml, forceUpdate, fromMail }) {
    const [editor] = useLexicalComposerContext();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        console.info('defaultValue', initialized, defaultValue);
        if (!initialized) {
            editor.update(() => {
                const root = $getRoot();
                root.clear();

                if (defaultValue) {
                    // Parse HTML and configure to preserve all styling
                    const parser = new DOMParser();
                    const dom = parser.parseFromString(defaultValue, 'text/html');

                    // Use $generateNodesFromDOM with the editor instance
                    // This will convert HTML to Lexical nodes while preserving inline styles
                    const nodes = $generateNodesFromDOM(editor, dom);
                    nodes.forEach((node) => root.append(node));
                }

                if (signatureHtml && !fromMail) {
                    // Only add signature separately if not from mail (to avoid duplication)
                    // Add spacing
                    const separator = $createParagraphNode();
                    separator.append($createTextNode(''));
                    root.append(separator);

                    const signaturePara = $createParagraphNode();
                    signaturePara.append($createTextNode('-- '));
                    root.append(signaturePara);

                    // Parse signature HTML into editable nodes
                    const parser = new DOMParser();
                    const dom = parser.parseFromString(signatureHtml, 'text/html');
                    const signatureNodes = $generateNodesFromDOM(editor, dom);
                    signatureNodes.forEach((node) => root.append(node));
                }
            });
            setInitialized(true);
        }
    }, [editor, defaultValue, signatureHtml, initialized, forceUpdate, fromMail]);

    return null;
}

function TableInsertDialog({ onInsert, onClose }) {
    const [rows, setRows] = useState('3');
    const [cols, setCols] = useState('3');

    const handleInsert = () => {
        const rowCount = parseInt(rows, 10);
        const colCount = parseInt(cols, 10);

        if (rowCount > 0 && colCount > 0) {
            onInsert(rowCount, colCount);
            onClose();
        }
    };
    // fixed inset-0 bg-black bg-opacity-50
    return (
        <div className=" flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full">
                <h3 className="text-lg font-semibold mb-4">Insert Table</h3>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Rows:</label>
                    <input
                        type="number"
                        min="1"
                        max="50"
                        value={rows}
                        onChange={(e) => setRows(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Columns:</label>
                    <input
                        type="number"
                        min="1"
                        max="50"
                        value={cols}
                        onChange={(e) => setCols(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                <div className="flex gap-2 justify-end">
                    <button onClick={onClose} className="px-4 py-2 border rounded hover:bg-gray-100">
                        Cancel
                    </button>
                    <button onClick={handleInsert} className="px-4 py-2 bg-thirdbg text-white rounded ">
                        Insert
                    </button>
                </div>
            </div>
        </div>
    );
}

const Toolbar = ({ _fileInputRef }) => {
    const [fontSize, setFontSize] = useState('16px');
    const [fontFamily, setFontFamily] = useState('Arial');
    const [textColor, setTextColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#ffffff');
    const [isListening, setIsListening] = useState(false);

    const [editor] = useLexicalComposerContext();
    const [showTableDialog, setShowTableDialog] = useState(false);
    const [showHtmlModal, setShowHtmlModal] = useState(false);
    const [htmlContent, setHtmlContent] = useState('');

    const [activeFormats, setActiveFormats] = useState({
        bold: false,
        italic: false,
        underline: false,
        strikethrough: false,
        code: false,
        subscript: false,
        superscript: false,
        h1: false,
        h2: false,
        h3: false,
        quote: false,
        ul: false,
        ol: false,
        check: false
    });

    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                const selection = $getSelection();
                if ($isRangeSelection(selection)) {
                    const anchorNode = selection.anchor.getNode();
                    const element =
                        anchorNode.getKey() === 'root' ? anchorNode : anchorNode.getTopLevelElementOrThrow();

                    setActiveFormats({
                        bold: selection.hasFormat('bold'),
                        italic: selection.hasFormat('italic'),
                        underline: selection.hasFormat('underline'),
                        strikethrough: selection.hasFormat('strikethrough'),
                        code: selection.hasFormat('code'),
                        subscript: selection.hasFormat('subscript'),
                        superscript: selection.hasFormat('superscript'),
                        h1: $isHeadingNode(element) && element.getTag() === 'h1',
                        h2: $isHeadingNode(element) && element.getTag() === 'h2',
                        h3: $isHeadingNode(element) && element.getTag() === 'h3',
                        quote: $isQuoteNode(element),
                        ul: $isListNode(element) && element.getListType() === 'bullet',
                        ol: $isListNode(element) && element.getListType() === 'number',
                        check: $isListNode(element) && element.getListType() === 'check'
                    });
                }
            });
        });
    }, [editor]);

    const formatText = (format) => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
        setTimeout(() => editor.focus(), 0);
    };

    const toggleHeading = (headingTag) => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                const anchorNode = selection.anchor.getNode();
                let elementToReplace = anchorNode;

                if ($isTextNode(anchorNode)) {
                    elementToReplace = anchorNode.getParent();
                }

                if ($isHeadingNode(elementToReplace) && elementToReplace.getTag() === headingTag) {
                    const paragraph = $createParagraphNode();
                    const children = elementToReplace.getChildren();
                    children.forEach((child) => paragraph.append(child));
                    elementToReplace.replace(paragraph);
                } else {
                    const heading = $createHeadingNode(headingTag);
                    if (elementToReplace && elementToReplace.getChildren) {
                        const children = elementToReplace.getChildren();
                        children.forEach((child) => heading.append(child));
                        elementToReplace.replace(heading);
                    }
                }
            }
        });
        setTimeout(() => editor.focus(), 0);
    };

    const toggleQuote = () => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                const anchorNode = selection.anchor.getNode();
                let elementToReplace = anchorNode;

                if ($isTextNode(anchorNode)) {
                    elementToReplace = anchorNode.getParent();
                }

                if ($isQuoteNode(elementToReplace)) {
                    const paragraph = $createParagraphNode();
                    const children = elementToReplace.getChildren();
                    children.forEach((child) => paragraph.append(child));
                    elementToReplace.replace(paragraph);
                } else {
                    const quote = $createQuoteNode();
                    if (elementToReplace && elementToReplace.getChildren) {
                        const children = elementToReplace.getChildren();
                        children.forEach((child) => quote.append(child));
                        elementToReplace.replace(quote);
                    }
                }
            }
        });
        setTimeout(() => editor.focus(), 0);
    };

    const toggleBulletList = () => {
        if (activeFormats.ul) {
            editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
        } else {
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        }
        setTimeout(() => editor.focus(), 0);
    };

    const toggleNumberedList = () => {
        if (activeFormats.ol) {
            editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
        } else {
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        }
        setTimeout(() => editor.focus(), 0);
    };

    const _toggleCheckList = () => {
        if (activeFormats.check) {
            editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
        } else {
            editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined);
        }
        setTimeout(() => editor.focus(), 0);
    };

    const formatAlignment = (alignment) => {
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, alignment);
        setTimeout(() => editor.focus(), 0);
    };

    const insertLink = () => {
        const url = prompt('Enter URL:');
        if (url) {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
            setTimeout(() => editor.focus(), 0);
        }
    };

    const insertHorizontalRule = () => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                const hrNode = $createHorizontalRuleNode();
                selection.insertNodes([hrNode]);
            }
        });
        setTimeout(() => editor.focus(), 0);
    };

    const handleInsertTable = (rows, cols) => {
        editor.dispatchCommand(INSERT_TABLE_COMMAND, {
            rows: String(rows),
            columns: String(cols),
            includeHeaders: true
        });
        setTimeout(() => editor.focus(), 0);
    };
    const applyFontSize = (size) => {
        setFontSize(size);
        // Use requestAnimationFrame to batch the update
        requestAnimationFrame(() => {
            editor.update(
                () => {
                    const selection = $getSelection();
                    if ($isRangeSelection(selection)) {
                        const nodes = selection.getNodes();
                        nodes.forEach((node) => {
                            if ($isTextNode(node)) {
                                node.setStyle(`font-size: ${size}`);
                            }
                        });
                    }
                },
                {
                    discrete: true, // Prevents scroll jumping
                    tag: 'history-merge' // Merges with previous history entry
                }
            );
        });
    };
    const applyFontFamily = (family) => {
        setFontFamily(family);
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                const nodes = selection.getNodes();
                nodes.forEach((node) => {
                    if ($isTextNode(node)) {
                        node.setStyle(`font-family: ${family}`);
                    }
                });
            }
        });
        // setTimeout(() => editor.focus(), 0);
    };

    const applyTextColor = (color) => {
        setTextColor(color);
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                const nodes = selection.getNodes();
                nodes.forEach((node) => {
                    if ($isTextNode(node)) {
                        const currentStyle = node.getStyle() || '';
                        const newStyle = currentStyle.replace(/color:\s*[^;]+;?/gi, '') + `color: ${color};`;
                        node.setStyle(newStyle);
                    }
                });
            }
        });
        setTimeout(() => editor.focus(), 0);
    };

    const applyBgColor = (color) => {
        setBgColor(color);
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                const nodes = selection.getNodes();
                nodes.forEach((node) => {
                    if ($isTextNode(node)) {
                        const currentStyle = node.getStyle() || '';
                        const newStyle =
                            currentStyle.replace(/background-color:\s*[^;]+;?/gi, '') + `background-color: ${color};`;
                        node.setStyle(newStyle);
                    }
                });
            }
        });
        setTimeout(() => editor.focus(), 0);
    };

    const clearFormatting = () => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                const nodes = selection.getNodes();
                nodes.forEach((node) => {
                    if ($isTextNode(node)) {
                        node.setFormat(0);
                        node.setStyle('');
                    }
                });
            }
        });
        setTimeout(() => editor.focus(), 0);
    };

    const start = () => editor.dispatchCommand(SPEECH_TO_TEXT_COMMAND, true);

    const stop = () => editor.dispatchCommand(SPEECH_TO_TEXT_COMMAND, false);

    const toggleListening = () => {
        if (isListening) {
            stop();
            setIsListening(false);
        } else {
            editor.focus();
            // Insert one space into editor
            editor.update(() => {
                const selection = $getSelection();
                if ($isRangeSelection(selection)) {
                    selection.insertText(' ');
                }
            });
            start();

            setIsListening(true);
        }
    };

    const openHtmlModal = () => {
        editor.getEditorState().read(() => {
            const html = $generateHtmlFromNodes(editor, null);
            setHtmlContent(html);
        });
        setShowHtmlModal(true);
    };

    const updateEditorFromHtml = () => {
        editor.update(() => {
            const root = $getRoot();
            root.clear();

            if (htmlContent.trim()) {
                // Add empty paragraph at the top for user to type
                const topSpacer = $createParagraphNode();
                topSpacer.append($createTextNode(''));
                root.append(topSpacer);

                // Create an HTML block node to preserve exact styling
                const htmlNode = $createHTMLBlockNode(htmlContent);
                root.append(htmlNode);

                // Add empty paragraph at the bottom for user to type
                const bottomSpacer = $createParagraphNode();
                bottomSpacer.append($createTextNode(''));
                root.append(bottomSpacer);
            } else {
                // If content is empty, just add one editable paragraph
                const emptyPara = $createParagraphNode();
                emptyPara.append($createTextNode(''));
                root.append(emptyPara);
            }
        });
        setShowHtmlModal(false);
    };
    // const updateEditorFromHtml = () => {
    //     editor.update(() => {
    //         const root = $getRoot();
    //         root.clear();

    //         if (htmlContent.trim()) {
    //             // Create an HTML block node to preserve exact styling
    //             const htmlNode = $createHTMLBlockNode(htmlContent);
    //             root.append(htmlNode);
    //         }
    //     });
    //     setShowHtmlModal(false);
    // };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(htmlContent);
    };

    const clearEditor = () => {
        // if (window.confirm('Are you sure you want to clear all content? This action cannot be undone.')) {
        editor.update(() => {
            const root = $getRoot();
            root.clear();

            // Add an empty paragraph to maintain editor structure
            const paragraph = $createParagraphNode();
            root.append(paragraph);
        });
        setTimeout(() => editor.focus(), 0);
        // }
    };

    return (
        <>
            <div className="flex flex-wrap items-center gap-2 px-6 py-2 bg-white rounded-b-2xl rounded-t-lg border border-gray-200 shadow-md ">


                <div className="min-w-[140px] max-w-[140px] md:block hidden">
                    <SimpleSelectMenu
                        placeholder="Select"
                        targetProperty="label"
                        selectedValue={fontFamily}
                        valuePropertyName="label"
                        getSelectedIcon={() => {
                            return <span className="Capitalize text-xl font-serif !-mt-1 leading-none">T</span>;
                        }}
                        selectedSx="!-mt-1 text-sm"
                        optionsData={
                            [
                                { label: 'Arial' },
                                { label: 'Georgia' },
                                { label: 'Times New Roman' },
                                { label: 'Courier New' },
                                { label: 'Verdana' },
                                { label: 'Comic Sans MS' }
                            ] || []
                        }
                        sx="rounded-xl mt-0  max-h-[2.3rem] py-3 ring-gray-200 !font-normal cursor-pointer"
                        showChipOnly={false}
                        onChangeValue={(obj) => applyFontFamily(obj.label)}
                    />
                </div>
                <div className=" max-w-[120px] md:block hidden">
                    <SimpleSelectMenu
                        placeholder="Select"
                        targetProperty="label"
                        selectedValue={fontSize}
                        valuePropertyName="label"
                        getSelectedIcon={() => {
                            return <span className="capitalize text-xl font-serif !-mt-1 leading-none">Aa</span>;
                        }}
                        selectedSx="!-mt-1 text-sm"
                        optionsData={
                            [
                                { label: '12px' },
                                { label: '14px' },
                                { label: '16px' },
                                { label: '18px' },
                                { label: '20px' },
                                { label: '24px' },
                                { label: '32px' }
                            ] || []
                        }
                        sx="rounded-xl mt-0  max-h-[2.3rem] py-3 ring-gray-200 !font-normal cursor-pointer"
                        showChipOnly={false}
                        onChangeValue={(obj) => applyFontSize(obj.label)}
                    />
                </div>
                {/* 
                <DropdownMenu
                    icon={
                        <div className="border max-h-[2.3rem] w-[100px] min-w-[100px] overflow-hidden rounded-xl px-2 py-1 border-gray-200 bg-white shadow-sm hover:shadow-md transition-all flex items-center gap-1 flex-shrink-0">
                            <span className="capitalize text-xl font-serif leading-none">Aa</span>
                            <span className="text-sm text-secondarybg truncate flex-1 min-w-0" title={fontSize}>
                                {fontSize ? fontSize : '16px'}
                            </span>
                            <span className="flex-shrink-0">
                                <ChevronDownIcon className="h-4 w-4 text-secondarybg" />
                            </span>
                        </div>
                    }
                    className="!left-[70%]"
                    usePortal={false}
                >
                    <DropdownMenuItem onClick={() => applyFontSize('12px')}>12px</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => applyFontSize('14px')}>14px</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => applyFontSize('16px')}>16px</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => applyFontSize('18px')}>18px</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => applyFontSize('20px')}>20px</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => applyFontSize('24px')}>24px</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => applyFontSize('32px')}>32px</DropdownMenuItem>
                </DropdownMenu> */}
                <div className="relative group hidden">
                    <input
                        type="color"
                        value={textColor}
                        onChange={(e) => applyTextColor(e.target.value)}
                        className="!w-10 !h-10 rounded-xl cursor-pointer  "
                        title="Text Color"
                    />
                </div>

                <div className="relative group hidden">
                    <input
                        type="color"
                        value={bgColor}
                        onChange={(e) => applyBgColor(e.target.value)}
                        className="!w-10 !h-10 rounded-xl cursor-pointer  "
                        title="Background Color"
                    />
                </div>

                <ToolbarDivider />

                <ToolbarButton onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)} title="Undo (Ctrl+Z)">
                    <ArrowUturnLeftIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)} title="Redo (Ctrl+Y)">
                    <ArrowUturnRightIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton onClick={() => formatText('bold')} title="Bold (Ctrl+B)" active={activeFormats.bold}>
                    {/* <strong className="font-bold text-base">B</strong> */}
                    <BoldIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => formatText('italic')}
                    title="Italic (Ctrl+I)"
                    active={activeFormats.italic}
                >
                    {/* <em className="italic text-base font-serif">I</em> */}
                    <ItalicIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => formatText('underline')}
                    title="Underline (Ctrl+U)"
                    active={activeFormats.underline}
                >
                    {/* <span className="underline text-base font-semibold">U</span> */}
                    <UnderlineIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => formatText('strikethrough')}
                    title="Strikethrough"
                    active={activeFormats.strikethrough}
                >
                    {/* <s className="line-through text-base font-semibold">S</s> */}
                    <StrikethroughIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                <ToolbarButton onClick={() => formatText('code')} title="Code" active={activeFormats.code}>
                    <CodeBracketIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton onClick={() => toggleHeading('h1')} title="Heading 1" active={activeFormats.h1}>
                    {/* <span className="font-bold text-base">H1</span> */}
                    <H1Icon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                <ToolbarButton onClick={() => toggleHeading('h2')} title="Heading 2" active={activeFormats.h2}>
                    {/* <span className="font-bold text-sm">H2</span> */}
                    <H2Icon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                <ToolbarButton onClick={() => toggleHeading('h3')} title="Heading 3" active={activeFormats.h3}>
                    {/* <span className="font-bold text-xs">H3</span> */}
                    <H3Icon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                <ToolbarButton onClick={toggleQuote} title="Quote" active={activeFormats.quote}>
                    <ChatBubbleLeftRightIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton onClick={toggleBulletList} title="Bullet List" active={activeFormats.ul}>
                    <ListBulletIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                <ToolbarButton onClick={toggleNumberedList} title="Numbered List" active={activeFormats.ol}>
                    <NumberedListIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton
                    onClick={() => editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined)}
                    title="Decrease Indent"
                >
                    <ChevronLeftIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined)}
                    title="Increase Indent"
                >
                    <ChevronRightIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton onClick={() => formatAlignment('left')} title="Align Left">
                    <Bars3BottomLeftIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                <ToolbarButton onClick={() => formatAlignment('center')} title="Align Center">
                    <Bars3CenterLeftIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                <ToolbarButton onClick={() => formatAlignment('right')} title="Align Right">
                    <Bars3Icon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton onClick={insertLink} title="Insert Link">
                    <LinkIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                {/* <ToolbarButton onClick={() => fileInputRef.current?.click()} title="Insert Image">
                    <PhotoIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton> */}
                <ToolbarButton onClick={insertHorizontalRule} title="Horizontal Line">
                    <MinusIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                {/* <ToolbarButton onClick={() => setShowTableDialog(true)} title="Insert Table">
                    <TableCellsIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton> */}
                <ToolbarButton onClick={clearFormatting} title="Clear Formatting">
                    <XMarkIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                {/* // Replace the entire ToolbarButton for Speech to Text with this: */}


                <ToolbarButton
                    onClick={toggleListening}
                    title="Speech to Text"
                    removeBorders={isListening ? true : false}
                >
                    <div className="relative flex items-center justify-center h-10 w-10">
                        {isListening && (
                            <>
                                {/* Dark blue background circle - solid base */}
                                <div
                                    className="absolute rounded-full"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        background: '#0d1b37',
                                        zIndex: 2,
                                        filter: 'blur(1px)'
                                    }}
                                />

                                {/* Main thick glowing tide - widest arc */}
                                <div
                                    className="absolute rounded-full"
                                    style={{
                                        width: '125%',
                                        height: '125%',
                                        left: '-7.5%',
                                        top: '-7.5%',
                                        animation: 'spin 3s linear infinite',
                                        background: `conic-gradient(
                            from 0deg,
                            transparent 0deg,
                            rgba(0, 212, 255, 0) 10deg,
                            rgba(0, 212, 255, 0.3) 40deg,
                            rgba(0, 255, 255, 0.8) 70deg,
                            rgba(100, 200, 255, 1) 90deg,
                            rgba(182, 149, 248, 0.9) 110deg,
                            rgba(182, 149, 248, 0.5) 140deg,
                            rgba(182, 149, 248, 0) 170deg,
                            transparent 180deg,
                            transparent 360deg
                        )`,
                                        filter: 'blur(2px)',
                                        opacity: 1,
                                        zIndex: 1
                                    }}
                                />

                                {/* Inner glow layer for the main tide */}
                                <div
                                    className="absolute rounded-full"
                                    style={{
                                        width: '120%',
                                        height: '120%',
                                        left: '-7.5%',
                                        top: '-7.5%',
                                        animation: 'spin 3s linear infinite',
                                        background: `conic-gradient(
                            from 0deg,
                            transparent 0deg,
                            rgba(255, 255, 255, 0) 30deg,
                            rgba(255, 255, 255, 0.4) 70deg,
                            rgba(200, 220, 255, 0.6) 90deg,
                            rgba(220, 200, 255, 0.4) 110deg,
                            rgba(255, 255, 255, 0) 150deg,
                            transparent 180deg,
                            transparent 360deg
                        )`,
                                        filter: 'blur(1px)',
                                        opacity: 0.8,
                                        zIndex: 1
                                    }}
                                />

                                {/* Second counter-rotating thinner tide */}
                                <div
                                    className="absolute rounded-full"
                                    style={{
                                        width: '130%',
                                        height: '130%',
                                        left: '-9%',
                                        top: '-9%',
                                        animation: 'spin-reverse 3.5s linear infinite',
                                        background: `conic-gradient(
                            from 180deg,
                            transparent 0deg,
                            rgba(182, 149, 248, 0) 30deg,
                            rgba(182, 149, 248, 0.6) 65deg,
                            rgba(150, 180, 255, 0.9) 90deg,
                            rgba(0, 212, 255, 0.8) 115deg,
                            rgba(0, 212, 255, 0.4) 150deg,
                            rgba(0, 212, 255, 0) 180deg,
                            transparent 200deg,
                            transparent 360deg
                        )`,
                                        filter: 'blur(2px)',
                                        opacity: 0.9,
                                        zIndex: 1
                                    }}
                                />

                                {/* Glow layer for second tide */}
                                <div
                                    className="absolute rounded-full"
                                    style={{
                                        width: '118%',
                                        height: '118%',
                                        left: '-9%',
                                        top: '-9%',
                                        animation: 'spin-reverse 3.5s linear infinite',
                                        background: `conic-gradient(
                            from 180deg,
                            transparent 0deg,
                            rgba(255, 255, 255, 0) 50deg,
                            rgba(255, 255, 255, 0.3) 80deg,
                            rgba(255, 255, 255, 0.5) 90deg,
                            rgba(255, 255, 255, 0.3) 100deg,
                            rgba(255, 255, 255, 0) 130deg,
                            transparent 180deg,
                            transparent 360deg
                        )`,
                                        filter: 'blur(1px)',
                                        opacity: 0.7,
                                        zIndex: 1
                                    }}
                                />

                                {/* Third thinner rotating arc */}
                                <div
                                    className="absolute rounded-full"
                                    style={{
                                        width: '120%',
                                        height: '120%',
                                        left: '-10%',
                                        top: '-10%',
                                        animation: 'spin 4.5s linear infinite',
                                        background: `conic-gradient(
                            from 90deg,
                            transparent 0deg,
                            rgba(0, 212, 255, 0) 50deg,
                            rgba(0, 255, 255, 0.5) 75deg,
                            rgba(100, 200, 255, 0.7) 90deg,
                            rgba(182, 149, 248, 0.5) 105deg,
                            rgba(182, 149, 248, 0) 130deg,
                            transparent 150deg,
                            transparent 360deg
                        )`,
                                        filter: 'blur(8px)',
                                        opacity: 0.7,
                                        zIndex: 1
                                    }}
                                />

                                {/* Outer ambient glow */}
                                <div
                                    className="absolute rounded-full animate-pulse"
                                    style={{
                                        width: '130%',
                                        height: '130%',
                                        left: '-15%',
                                        top: '-15%',
                                        background: 'radial-gradient(circle, transparent 55%, rgba(0, 212, 255, 0.3) 75%, rgba(182, 149, 248, 0.2) 85%, transparent 95%)',
                                        filter: 'blur(5px)',
                                        animationDuration: '2s',
                                        zIndex: 0
                                    }}
                                />

                                {/* Expanding circle animation around mic - outward wave */}
                                <div
                                    className="absolute rounded-full animate-ping"
                                    style={{
                                        width: '70%',
                                        height: '70%',
                                        border: '2px solid rgba(0, 212, 255, 0.6)',
                                        zIndex: 3,
                                        animationDuration: '1.5s'
                                    }}
                                />

                                {/* Contracting circle animation around mic - inward wave */}
                                <div
                                    className="absolute rounded-full"
                                    style={{
                                        width: '60%',
                                        height: '60%',
                                        border: '1px solid rgba(182, 149, 248, 0.5)',
                                        zIndex: 3,
                                        animation: 'pulse-inward 1.5s ease-in-out infinite'
                                    }}
                                />

                                {/* Secondary expanding ring */}
                                <div
                                    className="absolute rounded-full animate-ping"
                                    style={{
                                        width: '70%',
                                        height: '70%',
                                        border: '1px solid rgba(182, 149, 248, 0.4)',
                                        zIndex: 3,
                                        animationDuration: '2s',
                                        animationDelay: '0.75s'
                                    }}
                                />
                            </>
                        )}

                        {/* Mic icon - always on top */}
                        <MicrophoneIcon
                            className={`md:w-5 md:h-5 w-3 h-3 relative transition-all duration-300 ${isListening ? 'text-white' : 'text-gray-700'
                                }`}
                            style={
                                isListening
                                    ? {
                                        filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))',
                                        zIndex: 10
                                    }
                                    : { zIndex: 10 }
                            }
                        />
                    </div>
                </ToolbarButton>
                <ToolbarButton onClick={openHtmlModal} title="View/Edit HTML Source">
                    <ArrowsRightLeftIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
                <ToolbarButton onClick={clearEditor} title="Clear All Content">
                    <TrashIcon className="md:w-5 md:h-5 w-3 h-3" />
                </ToolbarButton>
            </div>

            {showTableDialog && (
                <TableInsertDialog onInsert={handleInsertTable} onClose={() => setShowTableDialog(false)} />
            )}
            {showHtmlModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 shadow-xl max-w-4xl w-full mx-4 !max-h-[80vh] flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">HTML Source</h3>
                            <button
                                onClick={() => setShowHtmlModal(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex-1 mb-4 overflow-hidden">
                            <textarea
                                value={htmlContent}
                                onChange={(e) => setHtmlContent(e.target.value)}
                                className="w-full h-[400px] border rounded px-3 py-2 font-mono text-sm resize-none focus:outline-none focus:border-[#b695f8] focus:ring-2 focus:ring-[#b695f8]/20"
                                placeholder="Paste HTML here..."
                            />
                        </div>

                        <div className="flex gap-2 justify-end">
                            <button
                                type="button"
                                onClick={copyToClipboard}
                                className="px-4 py-2 border rounded hover:bg-gray-100"
                            >
                                Copy HTML
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setHtmlContent('');
                                    editor.update(() => {
                                        const root = $getRoot();
                                        root.clear();
                                    });
                                }}
                                className="px-4 py-2 border rounded hover:bg-gray-100 text-red-600"
                            >
                                Clear All
                            </button>
                            <button
                                type="button"
                                onClick={updateEditorFromHtml}
                                className="px-4 py-2 bg-thirdbg text-white rounded hover:bg-opacity-90"
                            >
                                Update Editor
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default function LexicalEditorComponent({
    defaultValue = '',
    onChange,
    className = '',
    signatureHtml = '',
    maxHeight = '400px',
    forceUpdate = false,
    placeholder = 'Start typing...',
    fromMail = false,
    fixedSignature = '',
    setForceUpdate = () => { }
}) {
    const editorConfig = {
        namespace: 'LexicalEditorComponent',
        nodes: [
            // ImageNode,
            HTMLBlockNode,
            ListNode,
            ListItemNode,
            LinkNode,
            HeadingNode,
            QuoteNode,
            HorizontalRuleNode,
            CodeNode,
            TableNode,
            TableCellNode,
            TableRowNode
        ],
        onError(error) {
            console.error('Lexical Error:', error);
        },
        theme: {
            heading: {
                h1: 'text-3xl font-bold my-3',
                h2: 'text-2xl font-bold my-2',
                h3: 'text-xl font-bold my-2'
            },
            quote: 'border-l-4 border-gray-400 pl-4 italic my-3',
            list: {
                ul: 'list-disc ml-5 my-2',
                ol: 'list-decimal ml-5 my-2',
                listitem: 'my-1',
                checklist: 'list-none my-2',
                listitemChecked: 'relative pl-6 line-through opacity-60',
                listitemUnchecked: 'relative pl-6'
            },
            link: 'text-blue-600 underline cursor-pointer hover:text-blue-800',
            text: {
                bold: 'font-bold',
                italic: 'italic',
                underline: 'underline',
                strikethrough: 'line-through',
                code: 'bg-gray-200 px-1.5 py-0.5 rounded font-mono text-sm text-red-600'
            },
            code: 'bg-gray-900 text-gray-100 font-mono block p-3 my-2 rounded text-sm overflow-x-auto',
            paragraph: 'my-1',
            table: 'border-collapse border border-gray-300 my-4 w-full',
            tableCell: 'border border-gray-300 p-2 min-w-[75px] relative',
            tableCellHeader: 'border border-gray-300 p-2 bg-gray-100 font-bold min-w-[75px]'
        }
    };

    const fileInputRef = useRef(null);
    const _editorRef = useRef(null);
    const [floatingAnchorElem, setFloatingAnchorElem] = useState(null);

    const onRef = (_floatingAnchorElem) => {
        if (_floatingAnchorElem !== null) {
            setFloatingAnchorElem(_floatingAnchorElem);
        }
    };

    const handleChange = (editorState, editor) => {
        editorState.read(() => {
            const html = $generateHtmlFromNodes(editor, null);
            if (onChange) onChange(html);
        });
    };
    return (
        <div className={`border border-secondarybg rounded-lg  bg-white ${className}`}>


            <LexicalComposer initialConfig={editorConfig}>
                <Toolbar fileInputRef={fileInputRef} />
                <InitialContentPlugin
                    defaultValue={defaultValue}
                    signatureHtml={signatureHtml}
                    forceUpdate={forceUpdate}
                    fromMail={fromMail}
                    setForceUpdate={setForceUpdate}
                />

                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={(e) => {
                        e.target.value = '';
                    }}
                />

                <div ref={onRef} className="relative bg-white rounded-b-lg overflow-auto" style={{ maxHeight }}>
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable
                                className="outline-none min-h-[400px] p-4 max-w-none focus:outline-none"
                                style={{ caretColor: 'black', color: '#000000' }}
                            />
                        }
                        placeholder={
                            <div className="text-secondarybg font-[400] pointer-events-none absolute top-4 left-4">
                                {placeholder}
                            </div>
                        }
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <OnChangePlugin onChange={handleChange} />
                    <ListPlugin />
                    <CheckListPlugin />
                    <LinkPlugin />
                    <ImagePlugin />
                    <HTMLPastePlugin />
                    {/* <TablePlugin hasCellMerge={true} hasCellBackgroundColor={true} /> */}
                    <TableActionMenuPlugin />
                    <TabIndentationPlugin />
                    <TableCellResizer _editor={_editorRef.current} />
                    <SpeechRecognition />
                    {floatingAnchorElem && <DraggableBlockPlugin anchorElem={floatingAnchorElem} />}
                </div>
            </LexicalComposer>

        </div>
    );
}