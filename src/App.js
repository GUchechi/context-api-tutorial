import React,{ useContext} from 'react';
import './App.css';
import Contact from './components/Contact';
import ProjectState from './ProjectContext';

function App() {
  return (

      <div className="App">
        <Contact />
      </div>
  )
}

export default App;
