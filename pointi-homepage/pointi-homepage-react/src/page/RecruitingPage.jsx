import React from 'react';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Recruiting from 'components/recruiting/Recruiting';

const Wrapper = styled.div``;

const RecruitingPage = () => {
    return (
        <Wrapper>
            <Header />
            <Recruiting />
            <Footer />
        </Wrapper>
    )
}

export default RecruitingPage;