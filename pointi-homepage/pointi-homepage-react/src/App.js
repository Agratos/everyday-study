import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import GlobalStyle from 'styles/GlobalStyle';
import Main from './page/MainPage';
import Company from './page/CompanyPage';
import Services from './page/ServicesPage';
import Carreer from 'page/CarreerPage';
import Technology from 'page/TechnologyPage';


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
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
