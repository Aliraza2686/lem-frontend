import React from 'react';
import { DecoratorNode } from 'lexical';

// const ImageComponent = ({ src, _nodeKey, altText, width, height, maxWidth, showCaption, caption, style }) => {
//   return (
//     <span
//       draggable="true"
//       style={{
//         display: 'inline-block',
//         maxWidth: maxWidth || '100%',
//         width: width || 'auto',
//         height: height || 'auto',
//         ...style,
//       }}
//     >
//       <img
//         src={src}
//         alt={altText || ''}
//         draggable="false"
//         style={{
//           width: '100%',
//           height: 'auto',
//           display: 'block',
//         }}
//       />
//       {showCaption && (
//         <div className="text-center text-sm text-gray-600 mt-1 italic">
//           {caption || 'Enter a caption...'}
//         </div>
//       )}
//     </span>
//   );
// };

const ImageComponent = ({ src, _nodeKey, altText, width, height, maxWidth, showCaption, caption, style }) => {
    return (
        <span
            draggable="true"
            style={{
                display: style?.float ? 'inline' : 'inline-block',
                maxWidth: maxWidth || '100%',
                width: width || 'auto',
                height: height || 'auto',
                float: style?.float || 'none',
                margin: style?.margin || '0 10px 10px 0',
                ...style
            }}
        >
            <img
                src={src}
                alt={altText || ''}
                draggable="false"
                style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                }}
            />
            {showCaption && (
                <div className="text-center text-sm text-gray-600 mt-1 italic">{caption || 'Enter a caption...'}</div>
            )}
        </span>
    );
};
export class ImageNode extends DecoratorNode {
    __src;
    __altText;
    __width;
    __height;
    __maxWidth;
    __showCaption;
    __caption;
    __style;

    static getType() {
        return 'image';
    }

    static clone(node) {
        return new ImageNode(
            node.__src,
            node.__altText,
            node.__maxWidth,
            node.__width,
            node.__height,
            node.__showCaption,
            node.__caption,
            node.__style,
            node.__key
        );
    }

    constructor(src, altText, maxWidth, width, height, showCaption, caption, style, key) {
        super(key);
        this.__src = src;
        this.__altText = altText;
        this.__maxWidth = maxWidth || '100%';
        this.__width = width || 'auto';
        this.__height = height || 'auto';
        this.__showCaption = showCaption || false;
        this.__caption = caption || '';
        this.__style = style || {};
    }

    static importDOM() {
        return {
            img: (_domNode) => ({
                conversion: (element) => {
                    const src = element.getAttribute('src');
                    const alt = element.getAttribute('alt');
                    const width = element.style.width || element.getAttribute('width') || 'auto';
                    const height = element.style.height || element.getAttribute('height') || 'auto';
                    const maxWidth = element.style.maxWidth || '100%';

                    // Extract all inline styles
                    const style = {};
                    if (element.style.cssText) {
                        const cssText = element.style.cssText;
                        if (cssText.includes('float:')) {
                            const floatMatch = cssText.match(/float:\s*(left|right)/);
                            if (floatMatch) style.float = floatMatch[1];
                        }
                        if (cssText.includes('margin')) {
                            style.margin = element.style.margin;
                            style.marginLeft = element.style.marginLeft;
                            style.marginRight = element.style.marginRight;
                            style.marginTop = element.style.marginTop;
                            style.marginBottom = element.style.marginBottom;
                        }
                        if (cssText.includes('display:')) {
                            const displayMatch = cssText.match(/display:\s*(inline|block|inline-block)/);
                            if (displayMatch) style.display = displayMatch[1];
                        }
                    }

                    if (src) {
                        const node = $createImageNode({
                            src,
                            altText: alt,
                            maxWidth,
                            width,
                            height,
                            style
                        });
                        return { node };
                    }
                    return null;
                },
                priority: 1
            })
        };
    }

    exportDOM() {
        const element = document.createElement('img');
        element.setAttribute('src', this.__src);
        element.setAttribute('alt', this.__altText);

        if (this.__width && this.__width !== 'auto') {
            element.style.width = this.__width;
        }
        if (this.__height && this.__height !== 'auto') {
            element.style.height = this.__height;
        }
        if (this.__maxWidth) {
            element.style.maxWidth = this.__maxWidth;
        }

        // Apply custom styles
        Object.keys(this.__style).forEach((key) => {
            element.style[key] = this.__style[key];
        });

        return { element };
    }

    createDOM() {
        const span = document.createElement('span');
        span.style.display = 'inline-block';
        return span;
    }

    updateDOM() {
        return false;
    }

    decorate() {
        return (
            <ImageComponent
                src={this.__src}
                nodeKey={this.getKey()}
                altText={this.__altText}
                width={this.__width}
                height={this.__height}
                maxWidth={this.__maxWidth}
                showCaption={this.__showCaption}
                caption={this.__caption}
                style={this.__style}
            />
        );
    }

    static importJSON(serializedNode) {
        const { src, altText, maxWidth, width, height, showCaption, caption, style } = serializedNode;
        return $createImageNode({
            src,
            altText,
            maxWidth,
            width,
            height,
            showCaption,
            caption,
            style
        });
    }

    exportJSON() {
        return {
            type: 'image',
            version: 1,
            src: this.__src,
            altText: this.__altText,
            maxWidth: this.__maxWidth,
            width: this.__width,
            height: this.__height,
            showCaption: this.__showCaption,
            caption: this.__caption,
            style: this.__style
        };
    }
}

export function $createImageNode({
    src,
    altText = '',
    maxWidth = '100%',
    width = 'auto',
    height = 'auto',
    showCaption = false,
    caption = '',
    style = {},
    key
}) {
    return new ImageNode(src, altText, maxWidth, width, height, showCaption, caption, style, key);
}

export function $isImageNode(node) {
    return node instanceof ImageNode;
}