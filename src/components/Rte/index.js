import React, { useState } from 'react'
import RichTextEditor from 'react-rte';

function RteTextEditor() {
    const [value, setValue]= useState(RichTextEditor.createEmptyValue())
    const onChange =(value)=>{
     setValue(value)
    }
    
  return (
    <div className='wrapper'>
        <h1>RTE</h1>
        <RichTextEditor value={value} onChange={onChange}/>
    </div>
  )
}

export default RteTextEditor