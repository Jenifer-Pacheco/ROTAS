import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import Navbar from './components/Navbar';

export default function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Contact' element={<ContactPage />} />

      </Routes>

    </>
  )
}

