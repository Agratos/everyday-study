import React from 'react';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer'
import Technology from 'components/technology/Technology';

const TechnologyPage = () => {
    return (
        <Wrapper>
            <Header page={'technology'} />
            <Technology />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.footerWrapper};
`;

export default TechnologyPage;