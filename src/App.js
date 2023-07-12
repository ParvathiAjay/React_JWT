import React from 'react';
import { BrowserRouter as Router, Routes, HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Help from './components/Help';
// import Contact from './components/Contact';

const App = () => {
  return (
    // <Router basename='/React_JWT'>
    // <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    // </HashRouter>
    //  {/* </Router> */}
  );
};

export default App;
