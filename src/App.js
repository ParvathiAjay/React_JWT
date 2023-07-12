import React from 'react';
import { BrowserRouter as Router, Routes, Switch,HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Help from './components/Help';
const App = () => {
  return (
    // .en
    // <Router>
      // {/* <HashRouter basename="/React_JWT"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      // </HashRouter>
    // </Router>
  );
};

export default App;
