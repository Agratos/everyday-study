import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import sendApi from 'api/sendApi';

import GlobalStyle from 'styles/GlobalStyle';
import Main from './page/MainPage';
import CompanyPage from './page/CompanyPage';
import SolutionPage from './page/SolutionPage';
import RecruitingPage from 'page/RecruitingPage';
import Technology from 'page/TechnologyPage';

import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  // useHook로 변경 예정
  const dispatch = useDispatch();
  useEffect(() => {
    sendApi.getAll().then(response => {
      dispatch({
        type: 'SET_DATA',
        menu: response[0],
        header: response[1],
        footer: response[2],
        main: response[3],
        introduce: response[4],
        technology: response[5],
        solution: response[6],
        career: response[7],
      })
    })
  },[])

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
        <Route path="/technology" element={<Technology />} />
        <Route path="/solution/:id" element={<SolutionPage />} />
        <Route path="/solution/:id/:click" element={<SolutionPage />} />
        <Route path="/recruiting/:id" element={<RecruitingPage />} />
        <Route path="/recruiting" element={<RecruitingPage />} />
      </Routes>
    </BrowserRouter>
}

export default App;
