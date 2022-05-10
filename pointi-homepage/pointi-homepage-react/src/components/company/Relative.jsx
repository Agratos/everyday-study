import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 auto;
`;
const Title = styled.div`
    font-size: 40px;
    font-weight: bolder;
    margin-bottom: 32px;
    text-align: center;
`;
const DataWrapperOut = styled.div`
    margin-top: 10vh;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
`; 
const DataWrapperIn = styled.div`
    border: 1px solid black;
    width: 30%;
    box-shadow: 4px 4px 4px #919191; 
    text-align: center;
    margin: 0 calc(9.4%/6);
    margin-bottom: 3vh;
`;
const DataImg = styled.img`
    width: 100%;
`;
const DataTitle = styled.div`
    color: #919191;
    text-align: left;
    margin-left: 24px;
`;
const DataText = styled.div`
    margin-top: 8px;
    margin-bottom: 24px;
    font-size: 1.3rem;
`;

const Relative = ({data}) => {
    return (
        <Wrapper id={`relative`}>
            <Title>관계사</Title>
                <DataWrapperOut>
                    { data.slice(0,data.length).map(({image, title, text},index) => (
                        <DataWrapperIn index={index} last={data.length} key={`relative${index}`}>
                            <DataImg src={require(`assets/imgs/introduce/${image}`)} />
                            <DataTitle>{title}</DataTitle>
                            <DataText>{text}</DataText>              
                        </DataWrapperIn>
                    ))}
                </DataWrapperOut>
        </Wrapper>
    )
}

export default Relative