import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Modal = (props) => {
    const [ scrollYPosition, setScrollYPosition ] = useState(window.scrollY);
    useEffect(() => {
        document.body.style.cssText = `
            position: fixed; 
            top: -${window.scrollY}px;
            left: 50%;
            transform: translate(-50%);
            overflow-y: scroll;
        `;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, [])

    return (
        <Wrapper scrollYPosition={scrollYPosition}>
            <DialogBox>{props.children}</DialogBox>
            <Background onClick={(e) => { 
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
    top: ${({scrollYPosition}) => `${scrollYPosition}px`};
    left: 50%;
    transform: translate(-50%);
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
`;
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default Modal;