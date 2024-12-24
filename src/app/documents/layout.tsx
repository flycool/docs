import React from "react";

interface DocumentsLayoutProp {
  children: React.ReactNode;
}

export default function DocumentLayout({ children }: DocumentsLayoutProp) {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="w-full bg-red-500">Document navbar</nav>
      {children}
    </div>
  );
}
