import React, { useEffect } from 'react';
import styled from 'styled-components';

const Modal = (props) => {
    useEffect(() => {
        document.body.style.cssText = `
                position: fixed; 
                top: calc(50%);
                left: calc(50%);
                transform: translate(-50%, -50%);
                overflow-y: scroll;
            `;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, [])

    return (
        <Wrapper>
            <DialogBox>{props.children}</DialogBox>
            <Backdrop onClick={(e) => { 
                e.preventDefault(); 
                if(props.onClickModal){
                    props.onClickModal();
                }
            }} />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: calc(50%);
    left: calc(50%);
    transform: translate(-50%, -50%);
    z-index: 999;
`;
const DialogBox = styled.div`
    width: fit-content;
    height: fit-content;
    border: none;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
    box-sizing: border-box;
    background-color: white;
    position: fixed;
    top: calc(50%);
    left: calc(50%);
    transform: translate(-50%, -50%);
    z-index: 1000;
`;
const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default Modal;