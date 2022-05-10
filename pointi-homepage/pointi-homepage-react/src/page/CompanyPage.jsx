import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Company from 'components/company/Company';
import ScrollToMoveId from 'containers/scroll/ScrollToMoveId';

const Wrapper = styled.div``;

const CompanyPage = () => {
    let { id } = useParams();

    return (
        <Wrapper id='introduce-page-wrapper'>
            <Header />
            <Company id={id}/>
            <Footer />
        </Wrapper>
    );
};

export default CompanyPage;