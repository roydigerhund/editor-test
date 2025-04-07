import { PlateEditor } from "~/plate/editor/plate-editor";

export default function Home() {
  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-2xl font-bold my-8">Plate</h2>
      <PlateEditor />
    </div>
  );
}
