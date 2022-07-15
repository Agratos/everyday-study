import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

const RecruitingTalentBenefit = ({data}) => {
    const device = useSelector(state => state.setDeviceReducer.device);
    return (
        <Wrapper device={device} type={data.title}>   
            <Img src={require(`assets/imgs/recruiting/${data.image}`)} />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    ${({device}) => device === 'Mobile' && css`
        margin-top: -32px;
    `}
    width: ${({type}) => type === 'Talent' ? '50%' : '70%'};
`;
const Img = styled.img`
    width: 100%;
`;

export default RecruitingTalentBenefit;