import React,{ useContext, useState} from 'react';
import './App.css';
import Contact from './components/Contact';
import {ProjectState} from './ProjectContext';

function App() {
  const [number, SetNumber] = useState(1)

  return (
    <ProjectState>
      <div className="App">
        <Contact number={number} />
      </div>
    </ProjectState>
  )
}

export default App;
