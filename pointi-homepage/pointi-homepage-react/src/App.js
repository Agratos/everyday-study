import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import GlobalStyle from 'styles/GlobalStyle';
import Main from './page/MainPage';
import IntroducePage from './page/IntroducePage';
import SolutionPage from './page/SolutionPage';
import Career from 'page/CareerPage';
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
        <Route path="/introduce/:id" element={<IntroducePage />} />
        <Route path="/introduce/" element={<IntroducePage />} />
        <Route path="/technology/:id" element={<Technology />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/solution/:id" element={<SolutionPage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/career/:id" element={<Career />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
