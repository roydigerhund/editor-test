import { Plate } from "@udecode/plate/react";

import { useCreateEditor } from "./use-create-editor";
import { Editor, EditorContainer } from "../plate-ui/editor";

export function PlateEditor() {
  const editor = useCreateEditor();

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <Editor variant="demo" placeholder="Type..." />
      </EditorContainer>
    </Plate>
  );
}
