import React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
    $deleteTableColumn__EXPERIMENTAL,
    $deleteTableRow__EXPERIMENTAL,
    $getTableCellNodeFromLexicalNode,
    $insertTableColumn__EXPERIMENTAL,
    $insertTableRow__EXPERIMENTAL,
    $isTableCellNode,
    $isTableSelection
} from '@lexical/table';
import { $getSelection, $isRangeSelection } from 'lexical';
import { useCallback, useEffect, useState } from 'react';

export default function TableActionMenuPlugin() {
    const [editor] = useLexicalComposerContext();
    const [tableCellNode, setTableCellNode] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        return editor.registerUpdateListener(() => {
            editor.getEditorState().read(() => {
                const selection = $getSelection();

                if ($isRangeSelection(selection) || $isTableSelection(selection)) {
                    const anchorNode = selection.anchor.getNode();
                    const cellNode = $getTableCellNodeFromLexicalNode(anchorNode);

                    if ($isTableCellNode(cellNode)) {
                        setTableCellNode(cellNode);
                    } else {
                        setTableCellNode(null);
                    }
                } else {
                    setTableCellNode(null);
                }
            });
        });
    }, [editor]);

    const insertTableRowAtSelection = useCallback(
        (shouldInsertAfter) => {
            editor.update(() => {
                if (tableCellNode) {
                    $insertTableRow__EXPERIMENTAL(shouldInsertAfter);
                }
            });
            setIsMenuOpen(false);
        },
        [editor, tableCellNode]
    );

    const insertTableColumnAtSelection = useCallback(
        (shouldInsertAfter) => {
            editor.update(() => {
                if (tableCellNode) {
                    $insertTableColumn__EXPERIMENTAL(shouldInsertAfter);
                }
            });
            setIsMenuOpen(false);
        },
        [editor, tableCellNode]
    );

    const deleteTableRowAtSelection = useCallback(() => {
        editor.update(() => {
            if (tableCellNode) {
                $deleteTableRow__EXPERIMENTAL();
            }
        });
        setIsMenuOpen(false);
    }, [editor, tableCellNode]);

    const deleteTableColumnAtSelection = useCallback(() => {
        editor.update(() => {
            if (tableCellNode) {
                $deleteTableColumn__EXPERIMENTAL();
            }
        });
        setIsMenuOpen(false);
    }, [editor, tableCellNode]);
    if (!tableCellNode) {
        return null;
    }

    return (
        <div className="absolute bottom-4 right-4 z-50">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-thirdbg text-white px-3 py-2 text-sm rounded shadow-lg"
            >
                Table Actions
            </button>

            {isMenuOpen && (
                <div className="absolute bottom-full right-0 mb-2 bg-white border shadow-lg rounded-lg p-2 min-w-[200px]">
                    <button
                        onClick={() => insertTableRowAtSelection(false)}
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                    >
                        Insert Row Above
                    </button>
                    <button
                        onClick={() => insertTableRowAtSelection(true)}
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                    >
                        Insert Row Below
                    </button>
                    <button
                        onClick={() => insertTableColumnAtSelection(false)}
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                    >
                        Insert Column Left
                    </button>
                    <button
                        onClick={() => insertTableColumnAtSelection(true)}
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                    >
                        Insert Column Right
                    </button>
                    <hr className="my-2" />
                    <button
                        onClick={deleteTableRowAtSelection}
                        className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-600 rounded text-sm"
                    >
                        Delete Row
                    </button>
                    <button
                        onClick={deleteTableColumnAtSelection}
                        className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-600 rounded text-sm"
                    >
                        Delete Column
                    </button>
                </div>
            )}
        </div>
    );
}