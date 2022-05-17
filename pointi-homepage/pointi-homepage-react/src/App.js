import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import sendApi from 'api/sendApi';

import GlobalStyle from 'styles/GlobalStyle';
import Main from './page/MainPage';
import CompanyPage from './page/CompanyPage';
import SolutionPage from './page/SolutionPage';
import RecruitingPage from 'page/RecruitingPage';
import Technology from 'page/TechnologyPage';



const App = () => {
  // useHook로 변경 예정
  const dispatch = useDispatch();
  const isPc = useMediaQuery({ query: '(min-width: 1200px)' })
  const isTablet = useMediaQuery({ query: '(min-width:800px) and (max-width: 1199.99px)'})
  const isMobile = useMediaQuery({ query: '(max-width: 799.99px)' })
  const device = (isPc && 'PC') || (isTablet && 'Tablet') || (isMobile && 'Mobile');
  
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

  useEffect(() => {
    dispatch({
      type: 'SET_DEVICE',
      device: device,
    })
  }, [device])
  
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
      </Routes>
    </BrowserRouter>
}

export default App;
