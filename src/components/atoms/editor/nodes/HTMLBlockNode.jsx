import React from 'react';
import { DecoratorNode } from 'lexical';

const HTMLBlockComponent = ({ html, nodeKey }) => {
    return (
        <span
            key={nodeKey}
            dangerouslySetInnerHTML={{ __html: html }}
            className="html-block-container"
            contentEditable="false"
            suppressContentEditableWarning={true}
            style={{
                // IMPORTANT: Ensure it acts as a block and spans the necessary width
                display: 'block', 
                maxWidth: '100%',
                width: '100%',
                // Use 'min-height' and 'overflow' to correctly contain the content
                minHeight: '1px', 
                height: 'auto',
                overflow: 'visible', // Must be visible for signature pop-outs/shadows
                margin: '10px 0', 
            }}
        />
    );
};
export class HTMLBlockNode extends DecoratorNode {
    __html;

    static getType() {
        return 'html-block';
    }

    static clone(node) {
        return new HTMLBlockNode(node.__html, node.__key);
    }

    constructor(html, key) {
        super(key);
        this.__html = html;
    }

   static importDOM() {
        return {
            // ... (existing rules like span, div) ...

            // --- 🚀 NEW RULE FOR PASTE TRANSFORMATION ---
            span: (domNode) => {
                // Check for the placeholder we created in the paste plugin
                if (domNode.classList.contains('lexical-html-placeholder') && domNode.hasAttribute('data-lexical-html')) {
                    return {
                        conversion: (element) => {
                            const html = element.getAttribute('data-lexical-html');
                            if (html) {
                                // Convert the placeholder back into your custom HTMLBlockNode
                                return { node: $createHTMLBlockNode(html) };
                            }
                            return null;
                        },
                        priority: 3 // High priority
                    };
                }
                return null;
            },
            // ... (rest of the importDOM) ...
        };
    }
    exportDOM() {
        const element = document.createElement('span');
        element.className = 'html-block-container';
        element.innerHTML = this.__html;
        return { element };
    }

createDOM() {
        const span = document.createElement('span');
        span.className = 'html-block-wrapper'; 
        // Ensure Lexical's wrapper is a block and doesn't interfere with size
        span.style.display = 'block';
        span.style.lineHeight = '0'; // Minimize wrapper line height
        span.style.minHeight = '1px';
        return span;
    }
    updateDOM() {
        return false;
    }

    decorate() {
        return <HTMLBlockComponent html={this.__html} nodeKey={this.getKey()} />;
    }

    static importJSON(serializedNode) {
        const { html } = serializedNode;
        return $createHTMLBlockNode(html);
    }

    exportJSON() {
        return {
            type: 'html-block',
            version: 1,
            html: this.__html
        };
    }

    getHTML() {
        return this.__html;
    }

    setHTML(html) {
        const writable = this.getWritable();
        writable.__html = html;
    }

   isInline() {
        return false; 
    }
}

export function $createHTMLBlockNode(html) {
    return new HTMLBlockNode(html);
}

export function $isHTMLBlockNode(node) {
    return node instanceof HTMLBlockNode;
}