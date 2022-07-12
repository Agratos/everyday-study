import React from 'react';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Recruiting from 'components/recruiting/Recruiting';

const RecruitingPage = () => {
    return (
        <Wrapper>
            <Header page={'recruiting'} />
            <Recruiting />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.footerWrapper};
`;

export default RecruitingPage;