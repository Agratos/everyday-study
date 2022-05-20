import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 auto;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.title}
    margin-bottom: 32px;
`;
const DataWrapperOut = styled.div`
    ${({theme}) => theme.divCommon.flexWrap}
    justify-content: center;
`; 
const DataWrapperIn = styled.div`
    ${({theme, device}) => device === 'Mobile' && theme.divCommon.flexColumnCenterCenter}
    ${({theme}) => theme.divCommon.flexWrap}
    width: 900px;
`; 
const DataWrapper = styled.div`
    border: 1px solid black;
    width: ${({device}) => device === 'Mobile' ? '65%' : '264px'};
    box-shadow: 4px 4px 4px #919191; 
    margin: 16px;
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
    margin-left: 24px;
    margin-bottom: 24px;
    font-size: 1.3rem;
`;

const Relative = ({data, device}) => {
    return (
        <Wrapper id={`relative`}>
            <Title>관계사</Title>
                <DataWrapperOut device={device}>
                    <DataWrapperIn device={device}>
                        { data.slice(0,data.length).map(({image, title, text},index) => (
                            <DataWrapper index={index} last={data.length} key={`relative${index}`} device={device}>
                                <DataImg src={require(`assets/imgs/introduce/${image}`)} />
                                <DataTitle>{title}</DataTitle>
                                <DataText>{text}</DataText>              
                            </DataWrapper>
                        ))}
                    </DataWrapperIn>
                </DataWrapperOut>
        </Wrapper>
    )
}

export default Relative