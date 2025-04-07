// MagicTextPlugin.tsx
import React, { useEffect, type JSX } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  KEY_DOWN_COMMAND,
  COMMAND_PRIORITY_EDITOR,
  $getSelection,
  $isRangeSelection,
  TextNode,
  $isTextNode,
  $createTextNode,
} from "lexical";

import {
  $createMagicTextNode,
  $isMagicTextNode,
  MagicTextNode,
} from "./MagicTextNode";

export default function MagicTextPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      KEY_DOWN_COMMAND,
      (event: KeyboardEvent) => {
        // Check if user pressed Mod + Shift + M
        const isMod = event.ctrlKey || event.metaKey;
        if (isMod && event.shiftKey && event.key === "m") {
          event.preventDefault();

          editor.update(() => {
            const selection = $getSelection();
            if (!$isRangeSelection(selection)) {
              return;
            }
            // Get the exact text nodes in the selection
            const selectedNodes = selection.getNodes();

            // Determine if we are "removing magic" or "adding magic"
            // by checking if ANY selected node is currently MagicText
            const anyMagicText = selectedNodes.some((node) => {
              return node.getType() === MagicTextNode.getType();
            });

            // Apply or remove magic text on each selected text node
            for (const node of selectedNodes) {
              if (!$isTextNode(node)) {
                continue;
              }

              // If the user selected only part of a text node,
              // Lexical will have split it, so we have exactly that portion.
              if (anyMagicText) {
                // Toggle *off*: If it's magic, revert to normal text
                if ($isMagicTextNode(node)) {
                  node.replace($createTextNode(node.getTextContent()));
                }
              } else {
                // Toggle *on*: If it's normal text, replace with a magic text node
                if (node.getType() !== MagicTextNode.getType()) {
                  node.replace($createMagicTextNode(node.getTextContent()));
                }
              }
            }
          });

          return true;
        }
        return false;
      },
      COMMAND_PRIORITY_EDITOR
    );
  }, [editor]);

  return null;
}
