import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const Home = lazy(() => import('./components/Home'));
// const About = lazy(() => import('./routes/About'));


import Home from "./components/Home";
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="home/" element={<Home />} />

      </Routes>
    </Suspense>
  </Router>
);
export default App;