
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Main from './pages/main';
import Company from './pages/company';
import Services from './pages/services';

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>포인트아이</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company" element={<Company />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
