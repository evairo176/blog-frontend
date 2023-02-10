import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBarTipTap from "./MenuBarTipTap";

function Tiptap({ id, onChange, onBlur, value, error, touched }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
      // send the content to an API here
    },
  });

  // handle change

  return (
    <>
      <MenuBarTipTap editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
}

export default Tiptap;
