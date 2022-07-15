import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IoCloseSharp } from 'react-icons/io5';

const PatentModal = ({imageUrl, onClickModal}) => {
    const device = useSelector(state => state.setDeviceReducer.device);
    return (
        <Wrapper device={device}>
            <CloseButton onClick={onClickModal}><IoCloseSharp size={24}/></CloseButton>
            <Image src={require(`assets/imgs/company/patents/${imageUrl}`)} />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: ${({device}) => device === 'Mobile' ? '100%' : '600px'};
`;
const CloseButton = styled.div`
    width: fit-content;
    float: right;
    :hover{
        cursor: pointer;
    }
`;
const Image = styled.img`
    width: 100%;
`;

export default PatentModal;