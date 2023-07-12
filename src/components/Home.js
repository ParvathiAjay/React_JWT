import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/about">Go to About</Link> <br/> <br/>
      {process.env.REACT_APP_API_URL}
    </div>
  );
};

export default Home;
