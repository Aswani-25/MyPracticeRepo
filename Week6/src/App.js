import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Handson1 from './handsons/myfirstreact/Handson1';
import Handson2 from './handsons/StudentApp/Handson2';
import Handson3 from './handsons/scorecalculatorapp/Handson3';
import Handson4 from './handsons/blogapp/Handson4';
import Handson5 from './handsons/cohorttracker/Handson5';

export default function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Week-6 React Hands-ons</h1>
        <nav>
          <Link to="/handson1">Handson 1</Link> |{' '}
          <Link to="/handson2">Handson 2</Link> |{' '}
          <Link to="/handson3">Handson 3</Link> |{' '}
          <Link to="/handson4">Handson 4</Link> |{' '}
          <Link to="/handson5">Handson 5</Link>
        </nav>
        <Routes>
          <Route path="/handson1" element={<Handson1 />} />
          <Route path="/handson2" element={<Handson2 />} />
          <Route path="/handson3" element={<Handson3 />} />
          <Route path="/handson4" element={<Handson4 />} />
          <Route path="/handson5" element={<Handson5 />} />
        </Routes>
      </div>
    </Router>
  );
}
