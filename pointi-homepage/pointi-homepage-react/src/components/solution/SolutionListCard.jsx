import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: Wrap;
    max-width: 1200px;
    margin: 5vh 5vw;
`;
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 344px;
    height: 328px;
    margin-bottom: 4vh;
    line-height: 48px;
    border: 1px solid #E8E8E8;
    margin: 4vh 32px;
    margin-left: ${props => (props.index % 3) === 0 && '0'};
`;
const CardTitle = styled.div`
    font-size: 24px;
`;
const CardIntroduce = styled.div`
    font-size: 16px;
`;
const CardImgeWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background: #0181f5;
    background: linear-gradient(to bottom, #0181f5 0%, #5db2ff 100%);
    margin: auto;
`;
const CardImge = styled.img`
    text-align: center;
    width: 72px;
    height: 72px;
`;
const DetailButton = styled.div`
    margin-bottom: 32px;
    color: #5DB2FF;
    &:hover {
        cursor: pointer;
    }
`;

const SolutionListCard = ({list}) => {
    return (
        <Wrapper>
            {list.map((list, index) => (
                <CardWrapper index={index}>
                    <CardImgeWrapper>
                        <CardImge src={''} />  
                    </CardImgeWrapper> 
                    <CardTitle>{list.title}</CardTitle>
                    <CardIntroduce>{list.inner.introduce}</CardIntroduce>
                    <DetailButton id={list.title}>자세히</DetailButton>
                </CardWrapper>
            ))}
        </Wrapper>
    )
}

export default SolutionListCard;