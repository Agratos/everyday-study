import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Modal = (props) => {
    const [ scrollYPosition, setScrollYPosition ] = useState(window.scrollY);
    const [ startPosition, setStartPosition ] = useState({ x: 0, y: 0});
    const [ endPosition, setEndPosition ] = useState({ x: 0, y: 0});
    const [ isDrag, setIsDrag ] = useState(false);
    useEffect(() => {
        if(props.device === 'PC')
        {
            document.body.style.cssText = `
                position: fixed; 
                top: -${window.scrollY}px;
                left: 50%;
                transform: translate(-50%);
                overflow-y: scroll;
            `;
        } else if(props.device === 'Tablet'){
            document.body.style.cssText = `
                position: fixed; 
                top: -${window.scrollY}px;
                left: 50%;
                transform: translate(-50%);
                overflow-y: scroll;
                width: 100%;
            `;
        } else {
            document.body.style.cssText = `
                position: fixed; 
                top: -${window.scrollY}px;
                left: 50%;
                transform: translate(-50%);
                overflow-y: scroll;
                width: calc(100% - 24px);
                margin: 0 12px 0 0;
            `;
        }
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, [])

    const dragStart = (e) => {
        setStartPosition({
            x: e.screenX - e.currentTarget.getBoundingClientRect().left,
            y: e.screenY - e.currentTarget.getBoundingClientRect().top,
        })
        setIsDrag(true);
    }

    const dragging = (e) => {
        if(isDrag){
            const left = e.screenX - startPosition.x;
            const top = e.screenY - startPosition.y;

            setEndPosition({
                x: left,
                y: top
            })
        }
    }

    const dragEnd = () => {
        setIsDrag(false);
    }

    return (
        <Wrapper scrollYPosition={scrollYPosition}>
            <DialogBox 
                onMouseDown={(e) => dragStart(e)}
                onMouseMove={(e) => dragging(e)}
                onMouseUp={dragEnd}
                endPosition={endPosition}
            >
                {props.children}
            </DialogBox>
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
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: ${({scrollYPosition}) => `${scrollYPosition}px`};
    left: 50%;
    transform: translate(-50%);
    z-index: 999;
`;
const DialogBox = styled.div.attrs(({endPosition}) => (
    endPosition.x === 0 && endPosition.y === 0 ? {
        style:{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
        }
    } : {
        style:{
            top: `${endPosition.y}px`,
            left: `${endPosition.x}px`
        }
    }
))`
    width: fit-content;
    height: fit-content;
    border: none;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
    box-sizing: border-box;
    background-color: white;
    position: fixed;
    z-index: 1000;
`;
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default Modal;