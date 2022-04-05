import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const Home = lazy(() => import('./components/Home'));
// const About = lazy(() => import('./routes/About'));


import Home from "./components/Home";
import Login from "./components/login/Login"
import Signup from './components/signup/Signup';
import Dashboard from './components/dashboard/Dashboard';

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Suspense>
  </Router>
);
export default App;