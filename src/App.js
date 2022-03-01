import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education.js"
import Contact from "./Pages/Contact.js"

import { render } from '@testing-library/react';

import {HashRouter} from 'react-router-dom';

function App() {
  return (

    
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>  

  );
}

export default App;
