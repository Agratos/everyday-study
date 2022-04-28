import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 20vh;
`;
const Title = styled.div`
    font-size: 40px;
    font-weight: bolder;
    margin-bottom: 32px;
    text-align: center;
`;
const DataWrapperOut = styled.div`
    margin-top: 10vh;
    width: 95%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
`; 
const DataWrapperIn = styled.div`
    border: 1px solid black;
    box-shadow: 4px 4px 4px #919191; 
    text-align: center;
    justify-content: center;
    flex-basis: 30%;
    margin: ${props => (props.index % 3) === 1 && '0 calc(9.4%/2)'};
    margin-bottom: 5vh;
`;
const DataImg = styled.img`
    width: 20vw;
    height: 25vh;
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

    console.log(data.length)
    return (
        <Wrapper>
            <Title>관계사</Title>
                <DataWrapperOut>
                    { data.slice(0,data.length).map(({image, title, text},index) => (
                        <DataWrapperIn index={index} last={data.length}>
                            <DataImg src={require(`assets/imgs/introduce/${image}`)} />
                            <DataTitle>{title}</DataTitle>
                            <DataText>{text}</DataText>              
                        </DataWrapperIn>
                    ))}
                </DataWrapperOut>
            {/* <DataWrapperOut>
                { data.slice(0,data.length).map(({image, title, text},index) => (
                    <DataWrapperIn index={index}>
                        <DataImg src={require(`assets/imgs/introduce/${image}`)} />
                        <DataTitle>{title}</DataTitle>
                        <DataText>{text}</DataText>              
                    </DataWrapperIn>
                ))}
            </DataWrapperOut> */}
        </Wrapper>
    )
}

export default Relative