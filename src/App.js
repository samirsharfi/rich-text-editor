import React from 'react';
import './App.css';
import DraftTextEditor from './components/Draft';

import Quill from './components/Quill';

function App() {
  return (
    <div className="App">
      <h1>Draft</h1>
    <DraftTextEditor />
   
    <Quill/>
    </div>
  );
}

export default App;
