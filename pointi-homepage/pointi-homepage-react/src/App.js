import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import BeforeRendering from 'containers/setting/BeforeRendering';
import GlobalStyle from 'styles/GlobalStyle';
import Main from './page/MainPage';
import CompanyPage from './page/CompanyPage';
import Technology from 'page/TechnologyPage';
import SolutionPage from './page/SolutionPage';
import RecruitingPage from 'page/RecruitingPage';

const App = () => {
  return useSelector(state=>state.setDataReducer.isLoading) ? <div>Loading...</div> :
  <BrowserRouter>
      <GlobalStyle />
      <Helmet>
        <title>포인트아이</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company/:id" element={<CompanyPage />} />
        <Route path="/technology/:id" element={<Technology />} />
        {/* <Route path="/technology" element={<Technology />} /> */}
        <Route path="/solution/:id" element={<SolutionPage />} />
        <Route path="/solution/:id/:click" element={<SolutionPage />} />
        <Route path="/recruiting/:id" element={<RecruitingPage />} />
      </Routes>
    </BrowserRouter>
}

export default App;
