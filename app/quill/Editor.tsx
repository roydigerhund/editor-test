import React from "react";

import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css"; // Add css for snow theme
import Delta from "quill-delta";

export default function QuillEditor() {
  const { quill, quillRef, Quill } = useQuill({
    formats: ["magic", "bold", "italic", "underline", "strike"],
  });

  if (Quill && !quill) {
    const InlineBlot = Quill.import("blots/inline");

    class MagicTextBlot extends InlineBlot {
      static blotName = "magic"; // This is the format key (quill.format('magic', true))
      static tagName = "b"; // span doesn't work
      
      // Optional: Provide a className or apply it in formats() method.
      static className = "magic-text-blot";
    }
    Quill.register({ "formats/magic": MagicTextBlot });
  }

  React.useEffect(() => {
    if (quill) {
      for (let i = 0; i < 100; i++) {
        quill.updateContents(
          new Delta()
            .insert("Welcome to the playground", { bold: true })
            .insert("\n")
            .insert("Welcome to the playground", { italic: true })
            .insert("\n")
            .insert("Welcome to the playground", { underline: true })
            .insert("\n")
            .insert("Welcome to the playground", { strike: true })
            .insert("\n")
            .insert("Welcome to the playground", { magic: true })
            .insert("\n")
        );
      }
    }
  }, [quill]);

  return (
    <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
}
