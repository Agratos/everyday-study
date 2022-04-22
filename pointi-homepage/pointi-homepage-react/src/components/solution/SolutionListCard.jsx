import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const CardWrapper = styled.div``;
const CardTitle = styled.div``;
const CardIntroduce = styled.div``;
const CardImge = styled.div``;
const DetailButton = styled.div``;

const SolutionListCard = ({list}) => {
    console.log('작동');
    return (
        <Wrapper>
            {list.map((list) => (
                <CardWrapper>
                    <CardImge />
                    <CardTitle>{list.inner.title}</CardTitle>
                    <CardIntroduce>{list.inner.introduce}</CardIntroduce>
                    <DetailButton id={list.title}>자세히</DetailButton>
                </CardWrapper>
            ))}
        </Wrapper>
    )
}

export default SolutionListCard;