import React from 'react';
import styled, { css } from 'styled-components';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Company from 'components/company/Company';

const CompanyPage = () => {
    return (
        <Wrapper id='introduce-page-wrapper'>
            <Header page={'company'} />
            <Company />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div``;

export default CompanyPage;