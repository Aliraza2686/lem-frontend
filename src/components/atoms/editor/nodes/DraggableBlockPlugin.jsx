import React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import {
    $getNearestNodeFromDOMNode,
    COMMAND_PRIORITY_HIGH,
    COMMAND_PRIORITY_LOW,
    DRAGOVER_COMMAND,
    DROP_COMMAND,
    DRAGSTART_COMMAND,
} from 'lexical';
import { DRAG_DROP_PASTE } from "@lexical/rich-text";

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const DRAG_DATA_FORMAT = 'application/x-lexical-drag-block';

function DraggableBlockMenu({ anchorElem, editor, onDragStart, onDragEnd }) {
    let draggedNode = null;
    const menuRef = useRef(null);
    const [draggableBlockElem, setDraggableBlockElem] = useState(null);
console.info(draggedNode)
    useEffect(() => {
        function onMouseMove(event) {
            const target = event.target;

            if (!anchorElem.contains(target)) {
                setDraggableBlockElem(null);
                return;
            }

            const targetBlockElem = target.closest('[data-lexical-editor]');

            if (targetBlockElem !== null) {
                setDraggableBlockElem(targetBlockElem);
            } else {
                setDraggableBlockElem(null);
            }
        }

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, [anchorElem]);

    useEffect(() => {
        if (menuRef.current && draggableBlockElem) {
            const { top, left } = draggableBlockElem.getBoundingClientRect();
            const anchorRect = anchorElem.getBoundingClientRect();

            menuRef.current.style.top = `${top - anchorRect.top}px`;
            menuRef.current.style.left = `${left - anchorRect.left - 30}px`;
            menuRef.current.style.opacity = '1';
        } else if (menuRef.current) {
            menuRef.current.style.opacity = '0';
            menuRef.current.style.pointerEvents = 'none';
        }
    }, [anchorElem, draggableBlockElem]);

    const handleDragStart = (event) => {
        if (draggableBlockElem) {
            editor.update(() => {
                const node = $getNearestNodeFromDOMNode(draggableBlockElem);
                if (node) {
                    draggedNode = node;
                    event.dataTransfer.setData(DRAG_DATA_FORMAT, node.getKey());
                    event.dataTransfer.effectAllowed = 'move';
                    // Create an invisible drag image to prevent the blue line
                    const dragImage = document.createElement('div');
                    dragImage.style.opacity = '0';
                    dragImage.style.position = 'absolute';
                    dragImage.style.top = '-9999px';
                    document.body.appendChild(dragImage);
                    event.dataTransfer.setDragImage(dragImage, 0, 0);
                    setTimeout(() => document.body.removeChild(dragImage), 0);
                    onDragStart();
                }
            });
        }
    };

    const handleDragEnd = () => {
        draggedNode = null;
        onDragEnd();
    };

    return createPortal(
        <div
            ref={menuRef}
            className="absolute opacity-0 transition-opacity duration-200 cursor-grab active:cursor-grabbing pointer-events-auto"
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div className="w-6 h-6 bg-gray-300 hover:bg-gray-400 rounded flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <circle cx="3" cy="3" r="1.5" />
                    <circle cx="8" cy="3" r="1.5" />
                    <circle cx="13" cy="3" r="1.5" />
                    <circle cx="3" cy="8" r="1.5" />
                    <circle cx="8" cy="8" r="1.5" />
                    <circle cx="13" cy="8" r="1.5" />
                    <circle cx="3" cy="13" r="1.5" />
                    <circle cx="8" cy="13" r="1.5" />
                    <circle cx="13" cy="13" r="1.5" />
                </svg>
            </div>
        </div>,
        anchorElem
    );
}

export default function DraggableBlockPlugin({ anchorElem = document.body }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        return mergeRegister(
            editor.registerCommand(
                DRAGSTART_COMMAND,
                (event) => {
                    event.dataTransfer.effectAllowed = 'move';
                    return false;
                },
                COMMAND_PRIORITY_LOW
            ),
            editor.registerCommand(
                DRAGOVER_COMMAND,
                (event) => {
                    event.preventDefault();
                    event.dataTransfer.dropEffect = 'move';
                    return true;
                },
                COMMAND_PRIORITY_LOW
            ),
            editor.registerCommand(
                DROP_COMMAND,
                (event) => {
                    event.preventDefault();
                    return true;
                },
                COMMAND_PRIORITY_HIGH
            ),
            editor.registerCommand(
                DRAG_DROP_PASTE,
                () => {
                    return false;
                },
                COMMAND_PRIORITY_LOW
            )
        );
    }, [editor]);

    return <DraggableBlockMenu anchorElem={anchorElem} editor={editor} onDragStart={() => {}} onDragEnd={() => {}} />;
}