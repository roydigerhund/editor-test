import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ParagraphNode, TextNode } from "lexical";

import { MagicTextNode } from "~/lexical/MagicTextNode";
import MagicTextPlugin from "~/lexical/MagicTextPlugin";
import LexicalTheme from "../lexical/theme";
import ToolbarPlugin from "../lexical/ToolbarPlugin";

const initialChildren = [
  {
    children: [
      {
        detail: 0,
        format: 1,
        mode: "normal",
        style: "",
        text: "Welcome to the playground",
        type: "text",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "paragraph",
    version: 1,
  },
  {
    children: [
      {
        detail: 0,
        format: 2,
        mode: "normal",
        style: "",
        text: "Welcome to the playground",
        type: "text",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "paragraph",
    version: 1,
  },
  {
    children: [
      {
        detail: 0,
        format: 8,
        mode: "normal",
        style: "",
        text: "Welcome to the playground",
        type: "text",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "paragraph",
    version: 1,
  },
  {
    children: [
      {
        detail: 0,
        format: 4,
        mode: "normal",
        style: "",
        text: "Welcome to the playground",
        type: "text",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "paragraph",
    version: 1,
  },
  {
    children: [
      {
        detail: 0,
        format: 0,
        mode: "normal",
        style: "",
        text: "Welcome to the playground",
        type: "magic-text",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "paragraph",
    version: 1,
  },
];

const initialEditorState = JSON.stringify({
  root: {
    children: Array(100).fill(initialChildren).flat(),
    direction: null,
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
});

const editorConfig = {
  namespace: "React.js Demo",
  nodes: [ParagraphNode, TextNode, MagicTextNode],
  onError(error: Error) {
    throw error;
  },
  theme: LexicalTheme,
  editorState: initialEditorState,
};

const placeholder = "Enter some rich text...";

export default function Lexical() {
  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-2xl font-bold my-8">Lexical</h2>
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <ToolbarPlugin />
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={
                <ContentEditable
                  className="editor-input"
                  aria-placeholder={placeholder}
                  placeholder={
                    <div className="editor-placeholder">{placeholder}</div>
                  }
                />
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            <MagicTextPlugin />
            <HistoryPlugin />
          </div>
        </div>
      </LexicalComposer>
    </div>
  );
}
