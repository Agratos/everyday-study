import React from 'react';
import styled from 'styled-components';

const Loading = () => {
    return(
        <Wrapper>
            <LoadingRolling />
            <LoadingText>Loading</LoadingText>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenter}
`;
const LoadingRolling = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    border: solid 16px #f3f3f3;
	border-top: solid 16px #3498db;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    animation: spin 1.5s linear infinite;
    position: absolute;
    top: calc(50vh - 116px);
    left: calc(50vw - 116px);
`
const LoadingText = styled.div`
    @keyframes zoom {
        0% {
            font-size: 1.7rem;
            left: calc(50vw - 52px);
            top: calc(50vh - 18px);
        }
        50%{
            font-size: 2rem;
            left: calc(50vw - 62px);
            top: calc(50vh - 21px);
        }
        100% {
            font-size: 1.7rem;
            left: calc(50vw - 52px);
            top: calc(50vh - 18px);
        }
    }
    font-weight: bolder;
    position: absolute;
    left: calc(50vw - 55px);
    top: calc(50vh - 16px);
    animation: zoom 3s linear infinite;
`;

export default Loading;