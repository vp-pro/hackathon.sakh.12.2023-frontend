import React from 'react';
import {Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <>
      <Header/>    
      <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/csv" Component={CSVPage} />
      </Routes>
    </>


  );
};

export default App;