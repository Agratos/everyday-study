import React, { useState, useEffect, useRef} from 'react';
import styled, { css } from 'styled-components';

import { BsMouse } from 'react-icons/bs';

const RecruitingTalentBenefit = ({data}) => {
    const scrollPageRef = useRef([]);
    const [ scrollPage, setScrollPage ] = useState(0);
    const [ reset, setReset ] = useState(false);

    useEffect(() => {
        window.scroll({top: window.document.body.scrollHeight});
        setReset(false);
    },[scrollPage])

    const scrollAction = (e) => {
        if(reset){
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
    return (
        <Wrapper
            ref={element => (scrollPageRef.current[0] = element)} 
            onWheel={(e) => {scrollAction(e)}}
            onAnimationEnd={(e) => {setReset(true)}}
        >
            <TalentWrapper ref={element => (scrollPageRef.current[0] = element)} scrollPage={scrollPage}>
                <ImgWrapper>
                    <Img src={require(`assets/imgs/recruiting/${data['talent'].image}`)} />
                </ImgWrapper>
                <Title scrollPage={scrollPage}> 
                    {data['talent'].title}
                    <MouseIconWrapper>
                        <BsMouse size={24}/>
                    </MouseIconWrapper>
                </Title>
            </TalentWrapper>
            <BenefitWrapper ref={element => (scrollPageRef.current[1] = element)} scrollPage={scrollPage}>
                <Title scrollPage={scrollPage}> 
                    {data['benefit'].title}
                    <MouseIconWrapper>
                        <BsMouse size={24}/>
                    </MouseIconWrapper>
                </Title>
                <ImgWrapper scrollPage={scrollPage}>
                    <Img src={require(`assets/imgs/recruiting/${data['benefit'].image}`)} />
                </ImgWrapper>
            </BenefitWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
const TalentWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexCenter}
    padding-top: 32px;
    @keyframes changeTalent {
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
        animation: changeTalent 1s ease forwards;
    ` : css`
        display: none;
    `}
`;
const BenefitWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexCenter}
    padding-top: 32px;
    @keyframes changeBenfit {
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
        animation: changeBenfit 1s ease forwards;
    ` : css`
        display: none;
    `}
`;
const Title = styled.div`
    ${({theme}) => theme.fontCommon.companyTitle}
    ${({scrollPage}) => scrollPage === 0 ? css`
        margin-left: 80px;
    `:css`
        margin-right: 80px;
    `}
    font-size: 4rem;
    height: fit-content;
    border: none;
    margin-top: -16px ;
`;
const ImgWrapper = styled.div`
    max-width: ${({scrollPage}) => scrollPage === 1 ? '60%' : '50%'};
`;
const Img = styled.img`
    width: 100%;
`;
const MouseIconWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexCenterCenter}
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

export default RecruitingTalentBenefit;