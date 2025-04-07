"use client";

import { withProps } from "@udecode/cn";
import { BasicElementsPlugin } from "@udecode/plate-basic-elements/react";
import {
  BasicMarksPlugin,
  BoldPlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from "@udecode/plate-basic-marks/react";
import {
  createPlatePlugin,
  ParagraphPlugin,
  PlateElement,
  PlateLeaf,
  usePlateEditor,
} from "@udecode/plate/react";

const initialState = [
  {
    children: [{ text: "Welcome to the playground", bold: true }],
    type: ParagraphPlugin.key,
  },
  {
    children: [{ text: "Welcome to the playground", italic: true }],
    type: ParagraphPlugin.key,
  },
  {
    children: [{ text: "Welcome to the playground", underline: true }],
    type: ParagraphPlugin.key,
  },
  {
    children: [{ text: "Welcome to the playground", strikethrough: true }],
    type: ParagraphPlugin.key,
  },
  {
    children: [{ text: "Welcome to the playground", "magic-text": true }],
    type: ParagraphPlugin.key,
  },
];

export const useCreateEditor = () => {
  const MagicTextPlugin = createPlatePlugin({
    key: "magic-text",
    node: {
      isLeaf: true,
    },
    shortcuts: {
      newShortcut: {
        handler: ({ event, editor }) => {
          event.preventDefault();
          editor.tf.toggleMark("magic-text");
        },
        keys: "mod+shift+m",
      },
    },
  });

  return usePlateEditor({
    override: {
      components: {
        blockquote: withProps(PlateElement, {
          as: "blockquote",
          className: "mb-4 border-l-4 border-[#d0d7de] pl-4 text-[#636c76]",
        }),
        [MagicTextPlugin.key]: withProps(PlateLeaf, {
          as: "span",
          className:
            "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block text-transparent bg-clip-text font-bold",
        }),
        [BoldPlugin.key]: withProps(PlateLeaf, { as: "strong" }),
        h1: withProps(PlateElement, {
          as: "h1",
          className:
            "mb-4 mt-6 text-3xl font-semibold tracking-tight lg:text-4xl",
        }),
        h2: withProps(PlateElement, {
          as: "h2",
          className: "mb-4 mt-6 text-2xl font-semibold tracking-tight",
        }),
        h3: withProps(PlateElement, {
          as: "h3",
          className: "mb-4 mt-6 text-xl font-semibold tracking-tight",
        }),
        [ItalicPlugin.key]: withProps(PlateLeaf, { as: "em" }),
        [ParagraphPlugin.key]: withProps(PlateElement, {
          as: "p",
          className: "mb-4",
        }),
        [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: "s" }),
        [UnderlinePlugin.key]: withProps(PlateLeaf, { as: "u" }),
      },
    },
    plugins: [BasicElementsPlugin, BasicMarksPlugin, MagicTextPlugin],
    value: JSON.parse(JSON.stringify(Array(100).fill(initialState).flat())),
  });
};
