import logo from './logo.svg';
import './App.css';
import DraftTextEditor from './components/Draft';
import Rte from './components/Rte';
import Quill from './components/Quill';

function App() {
  return (
    <div className="App">
      <h1>Draft</h1>
    <DraftTextEditor />
    <Rte/>
    <Quill/>
    </div>
  );
}

export default App;
