import React from 'react';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Company from 'components/company/Company';

const Wrapper = styled.div``;

const CompanyPage = () => {
    return (
        <Wrapper id='introduce-page-wrapper'>
            <Header />
            <Company />
            <Footer />
        </Wrapper>
    );
};

export default CompanyPage;