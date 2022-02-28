import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "@ckeditor/ckeditor5-build-classic/build/translations/ru";
import "./TextEditor.css";
import { Col } from "react-bootstrap";

const TextEditor = ({ text, setText }) => {
  const editorConfig = {
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "|",
      "blockQuote",
      "undo",
      "redo",
    ],
    language: "ru",
    placeholder: "Текст",
  };

  return (
    <Col className="TextEditor">
      <CKEditor
        editor={ClassicEditor}
        config={editorConfig}
        data={text}
        onChange={(e, editor) => setText(editor.getData())}
      />
    </Col>
  );
};

export default TextEditor;
