import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h3> About</h3>
      <Link to="/help">Go to Help</Link>
    </div>
  );
};

export default About;
