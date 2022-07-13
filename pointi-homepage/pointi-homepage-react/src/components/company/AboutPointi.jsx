import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';

import Modal from 'components/modal/Modal';
import Pagination from 'containers/pagenation/Pagination';
import { BsMouse } from 'react-icons/bs';

import useWindowScrollPosition from 'containers/scroll/useWindowScrollPosition';

const AboutPointi = ({data, device}) => {
    const [ limit ] = useState(5);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    
    const [ isOpenModal, setIsOpenModal ] = useState(false);

    const scrollPageRef = useRef([]);
    const [ scrollPage, setScrollPage ] = useState(0);
    const [ reset, setReset ] = useState(false);

    useEffect(() => {
        window.scroll({top: window.document.body.scrollHeight});
        setReset(false);
    },[scrollPage])

    const scrollAction = (e) => {
        if(reset && !isOpenModal){
            if(e.deltaY > 0){
                if(scrollPage + 1 >= scrollPageRef.current.length) return
                else setScrollPage(scrollPage + 1);
            }else{
                if(scrollPage - 1 < 0 ) return
                else {
                    setScrollPage(scrollPage - 1); 
                }
            }
        }
    }

    const onClickModal = useCallback(() => {
        setIsOpenModal(!isOpenModal);
    }, [isOpenModal]);

    return (
        <Wrapper 
            id='patent' 
            ref={element => (scrollPageRef.current[0] = element)} 
            onWheel={(e) => {scrollAction(e)}}
            onAnimationEnd={(e) => {setReset(true)}}
        >
            {isOpenModal && <Modal onClickModal={onClickModal}><div>text중이다</div></Modal>}
            <AboutUs id='about-us' scrollPage={scrollPage}>
                <Title>{data['about-us'].title}</Title>
                <TextBoldWrapper>
                    {data['about-us']['text-bold'].map((text, index) => (
                        <TextBold key={`textbold-${index}`}>{text}</TextBold>
                    ))}
                </TextBoldWrapper>
                <TextNomalWrapper>
                    {data['about-us']['text-nomal'].map((text, index) => (
                        <TextNomal key={`textnomal-${index}`}>{text}</TextNomal>
                    ))}
                </TextNomalWrapper>
                <MouseIconWrapper>
                    <BsMouse size={24}/>
                </MouseIconWrapper>
            </AboutUs>
            <Patent id='patent' ref={element => (scrollPageRef.current[1] = element)} scrollPage={scrollPage}>
                <PatentMouseIconWrapper>
                    <BsMouse size={24}/>
                </PatentMouseIconWrapper>
                <Title>{data.patent.title}</Title>
                <ListWrapper>
                    { device !== 'Mobile' ? 
                        (<Tbody>
                            <TextWrapper none={true} weight={`bolder`}>
                                    <DateWrapper>등록일자</DateWrapper>
                                    <NumberWrapper>특허번호</NumberWrapper>
                                    <ListTitleWrapper>특허명</ListTitleWrapper>
                            </TextWrapper>
                            {data.patent.list.slice(offset, offset + limit).map(({date, number, name}, index) => (
                                <TextWrapper key={`patent-board${index}`} onClick={onClickModal}>
                                    <DateWrapper>{date}</DateWrapper>
                                    <NumberWrapper>{number}</NumberWrapper>
                                    <ListTitleWrapper>{name}</ListTitleWrapper>
                                </TextWrapper>
                            ))}
                        </Tbody>) : (
                        <Tbody>
                            <TextWrapper none={true} weight={`bolder`}>
                                    <MobilePatentWrapper>특허</MobilePatentWrapper>
                            </TextWrapper>
                            {data.patent.list.slice(offset, offset + limit).map(({date, number, name}, index) => (
                                <TextWrapper key={`patent-board${index}`}>
                                    <MobilePatentWrapper>
                                        <MobilePatentText>
                                            등록일자: {date}
                                        </MobilePatentText>
                                        <MobilePatentText>
                                            특허번호: {number}
                                        </MobilePatentText> 
                                        <MobilePatentText type={'특허명'}>
                                            <MobilePatentText width={'64px'}>
                                                특허명: 
                                            </MobilePatentText>
                                            <MobilePatentText width={'80%'}>
                                                {name}
                                            </MobilePatentText>
                                        </MobilePatentText>
                                    </MobilePatentWrapper>
                                </TextWrapper>
                            ))}
                        </Tbody>
                    )}
                </ListWrapper>
                <Pagination
                    total={data.patent.list.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </Patent>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
const AboutUs = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}

    @keyframes changeAbout {
        from{
            transform: translateY(100%);
            visibility: visible;
        }
        to{
            transform: translateY(0);
        }
    }

    ${({scrollPage}) => scrollPage === 0 ? css`
        //margin-bottom: 22vh;
        display: !none;
        animation: changeAbout 1s ease forwards;
    ` : css`
        display: none;
    `}
`;
const TextBoldWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin: 40px 0 24px 0;
`;
const TextBold = styled.div`
    ${({theme}) => theme.fontCommon.subtitle}
    font-size: 1.6rem;
`;
const TextNomalWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    margin: 24px 0 40px 0;
`;
const TextNomal = styled.div`
    font-size: 1.5rem;
`;
const MouseIconWrapper = styled.div`
    @keyframes mouseMove {
        form{
            transform: translateY(-10px);
        }
        to{
            transform: translateY(10px);
        }
    }
    //position: absolute;
    animation-direction: reverse;
    animation: mouseMove 0.8s ease-in-out infinite alternate;
    margin: 16px;
`;
const PatentMouseIconWrapper = styled(MouseIconWrapper)`
    position: absolute;
    top: -16px;
`;
const Patent = styled.div`
    ${({theme}) => theme.divCommon.flexColumnCenterCenter}
    //margin-top: -40px;
    margin-bottom: 150px;

    @keyframes changePatent {
        from{
            transform: translateY(-100%);
            visibility: visible;
        }
        to{
            transform: translateY(0);
        }
    }

    ${({scrollPage}) => scrollPage === 1 ? css`
        display: !none;
        animation: changePatent 1s ease forwards;
    ` : css`
        display: none;
    `}
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.companyTitle};
`;
const ListWrapper = styled.table`
    margin-top: 40px;
`;
const Tbody = styled.tbody``;
const TextWrapper = styled.tr`
    &:hover {
        background-color: #cac5c5;
    }
    pointer-events: ${props => props.none && `none`};
`;
const DateWrapper = styled.td`
    border: 1px solid black;
    width: 15%;
    font-size: 1.1rem;
    padding: 8px;
`;
const NumberWrapper =styled(DateWrapper)`
    margin-left: 32px;
`;
const ListTitleWrapper = styled(NumberWrapper)`
    width: 60%;
`;
const MobilePatentWrapper =styled(DateWrapper)`
    border-left: none;
`;
const MobilePatentText = styled.div`
    ${({type, theme}) => type === '특허명' && theme.divCommon.flex}
    width: ${({width}) => width};
`;

export default AboutPointi;