import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecruiterDashboard from './components/RecruiterDashboard';
import AddCandidate from './components/AddCandidateForm'; 
import Positions from './components/Positions'; 
import Position from './components/Position'; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecruiterDashboard />} />
        <Route path="/add-candidate" element={<AddCandidate />} /> {/* Agrega esta línea */}
        <Route path="/positions" element={<Positions />} />
        <Route path="/position/:id" element={<Position />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
};

export default App;