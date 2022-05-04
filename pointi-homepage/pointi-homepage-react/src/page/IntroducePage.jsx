import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Introduce from 'components/introduce/Introduce';
import ScrollToMoveId from 'containers/scroll/ScrollToMoveId';

import sendApi from 'api/sendApi';

const Wrapper = styled.div``;

const IntroducePage = () => {
    ScrollToMoveId();
    
    return (
        <Wrapper id='introduce-page-wrapper'>
            <Header title='Introduce' />
            <Introduce />
            <Footer />
        </Wrapper>
    );
};

export default IntroducePage;