import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import GlobalStyle from 'styles/GlobalStyle';
import Main from './page/Main';
import Company from './page/Company';
import Services from './page/Services';
import Carreer from 'page/Carreer';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Helmet>
        <title>포인트아이</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company/:id" element={<Company />} />
        <Route path="/service" element={<Services />} />
        <Route path="/carrer/:id" element={<Carreer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
