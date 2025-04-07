import QuillEditor from "~/quill/Editor";

export default function Home() {
  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-2xl font-bold my-8">Quill</h2>
      <QuillEditor />
    </div>
  );
}
