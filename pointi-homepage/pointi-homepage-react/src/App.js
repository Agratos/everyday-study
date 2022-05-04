import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import sendApi from 'api/sendApi';

import GlobalStyle from 'styles/GlobalStyle';
import Main from './page/MainPage';
import IntroducePage from './page/IntroducePage';
import SolutionPage from './page/SolutionPage';
import Career from 'page/CareerPage';
import Technology from 'page/TechnologyPage';

import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    sendApi.getMenu().then(response => {
      console.log(response);
      dispatch({
        type: 'SET_DATA',
        data: response.data,
      })
    })
  },[])
  console.log(`isLoading :`,useSelector(state=>state.setDataReducer.isLoading));

  if (useSelector(state=>state.setDataReducer.isLoading)) {
      return <div>Loading...</div>;
  }

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
