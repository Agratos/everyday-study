import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Solution from 'components/solution/Solution';
import ScrollToMoveId from 'containers/scroll/ScrollToMoveId';


const Wrapper = styled.div``;

const SolutionPage = () => {
    let { id } = useParams();
    ScrollToMoveId();
    return (
        <Wrapper>
            <Header title='PointI Solution' />
            <Solution id={id}/>
            <Footer />
        </Wrapper>
    );
};

export default SolutionPage;