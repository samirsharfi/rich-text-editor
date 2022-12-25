import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function QuillTextEditor() {
    const [value, setValue] = useState('');
    
  return (
    <div className='wrapper'>
        <h1>Quill</h1>
     <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  )
}

export default QuillTextEditor