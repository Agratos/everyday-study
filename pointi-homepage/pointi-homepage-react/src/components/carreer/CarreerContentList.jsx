import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 50%;
    padding-left: ${props => props.margin};
`;
const Title = styled.div`
    //border: 1px solid black;
    font-size: 24px;
    font-weight: bolder;
    margin-bottom: 20px;
`;
const Introduce = styled.div`
    //border: 1px solid black;
    color : #4D4D4D;
    margin-bottom: 16px;
    line-height: 1.5rem;
    font-size: 0.9rem;
`;
const ListWrapper = styled.div`
    //border: 1px solid black;
    display: flex;
    padding-left: 24px;
`;
const ListNumber = styled.div`
    //border: 1px solid black;
    color : #e62d2d;
    justify-content: center;
    align-items: center;
    margin: auto 4px auto 0;
    font-weight: bolder;
`;
const ListText = styled.div`
    //border: 1px solid black;
    color : #8288BB;
    line-height: 1.5rem;
    margin: 4px 0;
    font-size: 0.9rem;
`;


const CarreerContentList = ({ list, margin }) => {
    return (
        <Wrapper margin={margin}>
            <Title>{list.title}</Title>
            { list.introduce ? <Introduce>{list.introduce}</Introduce> : null }
            {list.list.map((text, index) => (
                <ListWrapper key={`list-wrapper-${index}`}>
                    { index < 9 ? <ListNumber>{`0${index+1}.`}</ListNumber> : <ListNumber>{`${index+1}.`}</ListNumber> }
                    <ListText>{text}</ListText>
                </ListWrapper>
            ))}
        </Wrapper>
    )
}

export default CarreerContentList;