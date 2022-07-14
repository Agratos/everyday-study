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
    margin: 40px 0;
    text-align: center;
`; 
const DataWrapperIn = styled.div`
    ${({theme, device}) => device === 'Mobile' && theme.divCommon.flexColumnCenterCenter}
    ${({theme}) => theme.divCommon.flexWrap}
    justify-content: center;
    width: inherit;
`; 
const DataWrapper = styled.div`
    border: 1px solid black;
    width: ${({device}) => device === 'Mobile' ? '350px' : '300px'};
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

export default Relationships;