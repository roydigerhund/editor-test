// MagicTextNode.ts
import {$applyNodeReplacement, TextNode, type EditorConfig, type LexicalNode, type SerializedTextNode} from 'lexical';

export class MagicTextNode extends TextNode {
  static getType(): string {
    return 'magic-text';
  }

  static clone(node: MagicTextNode): MagicTextNode {
    return new MagicTextNode(node.__text, node.__key);
  }

  createDOM(_config: EditorConfig): HTMLElement {
    const span = document.createElement('span');
    span.classList.add(
      'bg-gradient-to-r',
      'from-pink-500',
      'via-red-500',
      'to-yellow-500',
      'inline-block',
      'text-transparent',
      'bg-clip-text',
      'font-bold'
    );
    span.textContent = this.__text;
    return span;
  }

  updateDOM(prevNode: MagicTextNode, dom: HTMLElement): boolean {
    if (prevNode.__text !== this.__text) {
      dom.textContent = this.__text;
    }
    return false;
  }

  static importJSON(serializedNode: SerializedTextNode): MagicTextNode {
    return $createMagicTextNode().updateFromJSON(serializedNode);
  }
}

/** Factory helper for creating a MagicTextNode. */
export function $createMagicTextNode(text = ''): MagicTextNode {
  return $applyNodeReplacement(new MagicTextNode(text));
}

/** Type guard. */
export function $isMagicTextNode(
  node: LexicalNode | null | undefined
): node is MagicTextNode {
  return node instanceof MagicTextNode;
}