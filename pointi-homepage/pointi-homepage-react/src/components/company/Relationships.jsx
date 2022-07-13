import React from 'react';
import styled from 'styled-components';

const Relationships = ({data, device}) => {
    return (
        <Wrapper id={`relative`}>
            <Title>{data.title}</Title>
                <DataWrapperOut device={device}>
                    <DataWrapperIn device={device}>
                        { data.list.slice(0,data.list.length).map(({image, title, text},index) => (
                            <DataWrapper index={index} last={data.list.length} key={`relative${index}`} device={device}>
                                <DataImgWrapper>
                                    <DataImg src={require(`assets/imgs/company/relationships/${image}`)} />
                                </DataImgWrapper>
                                {/* <DataTitle>{title}</DataTitle>
                                <DataText>{text}</DataText> */}
                            </DataWrapper>
                        ))}
                    </DataWrapperIn>
                </DataWrapperOut>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin: 0 auto;
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.companyTitle};
`;
const DataWrapperOut = styled.div`
    ${({theme}) => theme.divCommon.flexWrap}
    margin: 40px 0 64px 0;
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
const DataImgWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    height: 150px;
    padding: 8px;
`;
const DataImg = styled.img`
    max-width: 100%;
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

export default Relationships;