import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 50%;
    padding-left: ${props => props.margin};
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.subtitle}
    margin-bottom: 20px;
`;
const Introduce = styled.div`
    color : #4D4D4D;
    margin-bottom: 16px;
    line-height: 1.5rem;
    font-size: 0.9rem;
`;
const ListWrapper = styled.div`
    ${({theme}) => theme.divCommon.flex}
    padding-left: 24px;
    margin-bottom: 8px;
`;
const ListNumber = styled.div`
    ${({theme}) => theme.divCommon.flexCenterCenter}
    color : #e62d2d;
    font-weight: bolder;
`;
const ListText = styled.div`
    color : #8288BB;
    line-height: 1.5rem;
    font-size: 0.9rem;
`;


const RecruitingContentList = ({ list, margin }) => {
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

export default RecruitingContentList;