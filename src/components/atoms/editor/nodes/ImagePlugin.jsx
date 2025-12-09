  import { useEffect } from 'react';
  import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
  import { $createImageNode } from './ImageNode';
  import { DRAG_DROP_PASTE } from '@lexical/rich-text';

  import { isMimeType, mediaFileReader } from '@lexical/utils';
  import { COMMAND_PRIORITY_LOW, $insertNodes, $getSelection } from 'lexical';

  const ACCEPTABLE_IMAGE_TYPES = ['image/', 'image/heic', 'image/heif', 'image/gif', 'image/webp'];

  export default function ImagePlugin() {
      const [editor] = useLexicalComposerContext();

      useEffect(() => {
          return editor.registerCommand(
              DRAG_DROP_PASTE,
              (files) => {
                  (async () => {
                      const filesResult = await mediaFileReader(
                          files,
                          [ACCEPTABLE_IMAGE_TYPES].flatMap((x) => x)
                      );

                      for (const { file, result } of filesResult) {
                          if (isMimeType(file, ACCEPTABLE_IMAGE_TYPES)) {
                              editor.update(() => {
                                  const imageNode = $createImageNode({
                                      src: result,
                                      altText: file.name
                                  });
                                  const selection = $getSelection();
                                  if (selection) {
                                      $insertNodes([imageNode]);
                                  }
                              });
                          }
                      }
                  })();
                  return true;
              },
              COMMAND_PRIORITY_LOW
          );
      }, [editor]);

      return null;
  }