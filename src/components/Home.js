import React, { useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}` + '/test')
      .then((res) => {
        console.log('res');
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h2>Home</h2>
      <Link to="/about">Go to About</Link> <br />
      <p>{process.env.REACT_APP_API_URL}</p>
    </div>
  );
};

export default Home;