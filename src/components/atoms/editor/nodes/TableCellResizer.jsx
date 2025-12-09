import React from 'react'
// import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
// import { useLexicalNodeSelection } from '@lexical/react/useLexicalNodeSelection';
// import { mergeRegister } from '@lexical/utils';
// import {
//     $getNodeByKey,
//     $getSelection,
//     $isNodeSelection,
//     CLICK_COMMAND,
//     COMMAND_PRIORITY_LOW,
//     KEY_BACKSPACE_COMMAND,
//     KEY_DELETE_COMMAND
// } from 'lexical';
import { _useCallback, useEffect, useRef, useState } from 'react';

export default function TableCellResizer({ _editor }) {
    const targetRef = useRef(null);
    const resizerRef = useRef(null);
    const [isResizing, setIsResizing] = useState(false);

    useEffect(() => {
        const targetElem = targetRef.current;
        const resizerElem = resizerRef.current;

        if (targetElem !== null && resizerElem !== null) {
            const handlePointerDown = (event) => {
                event.preventDefault();
                setIsResizing(true);

                const startX = event.clientX;
                const startWidth = targetElem.offsetWidth;

                const handlePointerMove = (moveEvent) => {
                    const diff = moveEvent.clientX - startX;
                    const newWidth = Math.max(startWidth + diff, 50);
                    targetElem.style.width = `${newWidth}px`;
                };

                const handlePointerUp = () => {
                    setIsResizing(false);
                    document.removeEventListener('pointermove', handlePointerMove);
                    document.removeEventListener('pointerup', handlePointerUp);
                };

                document.addEventListener('pointermove', handlePointerMove);
                document.addEventListener('pointerup', handlePointerUp);
            };

            resizerElem.addEventListener('pointerdown', handlePointerDown);

            return () => {
                resizerElem.removeEventListener('pointerdown', handlePointerDown);
            };
        }
    }, []);

    return (
        <div ref={targetRef} className="relative">
            <div
                ref={resizerRef}
                className={`absolute right-0 top-0 bottom-0 w-1 cursor-col-resize ${
                    isResizing ? 'bg-blue-500' : 'bg-transparent hover:bg-gray-300'
                }`}
            />
        </div>
    );
}