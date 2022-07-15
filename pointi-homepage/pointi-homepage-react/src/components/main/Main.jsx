import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

const Main = () => {
    const mainData = useSelector(state=>state.setDataReducer.main);
    const device = useSelector(state=>state.setDeviceReducer.device);

    return (
        <Wrapper device={device}>
            {mainData.data.map(({path,title,image}, index) => (
                <SolutionWrapper key={index} to={path} device={device} index={index}>
                    <Title device={device}>{title}</Title>
                    <Image src={require(`assets/imgs/main/${image}`)} device={device}/>
                </SolutionWrapper>
            ))}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({ theme }) => theme.divCommon.flexSpaceAroundCenter}
    padding: 32px 0;
    flex: 1;
    ${props=> props.device === 'Mobile' && 
        css`
            ${({ theme }) => theme.divCommon.flexColumn}
            width: 100%;
            height: fit-content;
            padding: 0;
        `
    }
`;
const SolutionWrapper = styled(Link)`
    ${({ theme }) => theme.divCommon.flexSpaceAround}
    ${({ theme }) => theme.divCommon.flexColumn}
    width: 30%;
    height: 240px;
    max-width: fit-content;
    padding: 8px;
    background: linear-gradient(-135deg, transparent 32px, #F0F9FD 0);
    font-size: 1.1rem;
    text-decoration: none;
    color: black;
    ${({device})=> device === 'Mobile' && css`
            margin: 8px auto;
            margin: ${({index}) => index === 0 && '8px auto'};
            width: calc(100vw - 100px);
            background: linear-gradient(-135deg, transparent 24px, #F0F9FD 0);\
            font-size: 1rem;
        `
    }
    ${({device}) => device === 'Tablet' && css`
        
    `}
    &:hover {
        color: white !important;
        background: linear-gradient(-135deg, transparent 32px, #1B9CE3 0);
    }
`;
const Title = styled.div`
    margin: ${({device}) => device === 'Mobile' ? '2px 4px' : '0 24px'};
    font-size: ${({device}) => device === 'Mobile' ? '1.4rem' : '1.2rem'};;
`;
const Image = styled.img`
    margin: 4px auto;
    width: ${({device}) => device === 'Mobile' ? 'calc(100vw - 100px);' : '90%'};
    height: 80%;
    ${({device}) => device !== 'PC' ? css`
        width: 100%;
    `: css`
        width: calc(100vw - 150px);
        height: 200px;
    `}
    max-width: 256px;
`;

export default Main;