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
    ${({device}) => device === 'PC' ? css`
        width: ${({type}) => type === 'Talent' ? '50%' : '70%'};
    `: device === 'Tablet' ? css`
        ${({type}) => type === 'Talent' ? css`
            width: inherit;
            max-width: 500px;
        ` : css`
            width: inherit;
            max-width: 700px;
        `};

    `: css` // mobile 일때
        width: 100%;
    `}
    margin-bottom: 16px;
`;
const Img = styled.img`
    width: 100%;
`;

export default RecruitingTalentBenefit;