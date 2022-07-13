import React from 'react';
import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';

const PatentModal = ({imageUrl, onClickModal}) => {
    return (
        <Wrapper>
            <CloseButton onClick={onClickModal}><IoCloseSharp size={24}/></CloseButton>
            <Image src={require(`assets/imgs/company/patents/${imageUrl}`)} />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 600px;
`;
const CloseButton = styled.div`
    width: fit-content;
    position: fixed;
    right: 0;
    top: 0;
    margin: 8px;
    :hover{
        cursor: pointer;
    }
`;
const Image = styled.img`
    width: 100%;
`;

export default PatentModal;