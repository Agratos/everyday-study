import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import Loading from 'components/loading/Loading';

import GlobalStyle from 'styles/GlobalStyle';
import Main from './page/MainPage';
import CompanyPage from './page/CompanyPage';
import Technology from 'page/TechnologyPage';
import SolutionPage from './page/SolutionPage';
import RecruitingPage from 'page/RecruitingPage';
import SolutionTestPage from 'page/SolutionTestPage';

const App = () => {
  return useSelector(state=>state.setDataReducer.isLoading) ? <Loading /> :
  <BrowserRouter>
      <GlobalStyle />
      <Helmet>
        <title>포인트아이</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company/:click" element={<CompanyPage />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology/:click" element={<Technology />} />
        <Route path="/solution/:id" element={<SolutionPage />} />
        <Route path="/solution/:id/:click" element={<SolutionPage />} />
        <Route path="/recruiting/:click" element={<RecruitingPage />} />
        <Route path="/solution/test/:id/:click" element={<SolutionTestPage />} />
      </Routes>
    </BrowserRouter>
}

export default App;
