
import Editor from "./editor";



interface DocumentIdPageProp {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentIdPage({ params }: DocumentIdPageProp) {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Editor></Editor>
    </div>
  );
}
