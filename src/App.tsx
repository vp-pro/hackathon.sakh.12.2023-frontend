import React, { Suspense } from 'react';
import {Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import Header from './components/Header/Header';
import CSVPage from './pages/CSV/CSV';
import Footer from './components/Footer/Footer';
import styles from './App.module.css'

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.mainContainer}>
        <Header/>    
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/csv" Component={CSVPage} />
        </Routes>
        <Footer/>
        
      </div>
    </Suspense>


  );
};

export default App;