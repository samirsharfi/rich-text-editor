import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const  modules  = {
  toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script:  "sub" }, { script:  "super" }],
      ["blockquote", "code-block"],
      [{ list:  "ordered" }, { list:  "bullet" }],
      [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
  ],
};

function QuillTextEditor() {
  const [value, setValue] = useState("");
  const [content, setContent] = useState([]);

  console.log(value);
  const onSubmit =()=> {
    setContent(value)
    setValue('')
  }

  const onEdit = ()=> {
    setValue(content)
    setContent([])
  }
  function createMarkup() {
    return {__html: content};
  }
  console.log(value);

  return (
    <div className="wrapper">
      <h1>Quill</h1>
      <ReactQuill theme="snow" modules={modules} value={value} onChange={setValue} placeholder="Content goes here..." />
      <button onClick={onSubmit}>submit</button>
      <button onClick={onEdit}>Edit</button>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
}

export default QuillTextEditor;
