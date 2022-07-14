import React, { useState, useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { BsMouse } from 'react-icons/bs';

const RecruitingTalentBenefit = ({data}) => {
    const scrollPageRef = useRef([]);
    const device = useSelector(state => state.setDeviceReducer.device);
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
            device={device}
            ref={element => (scrollPageRef.current[0] = element)} 
            onWheel={(e) => {scrollAction(e)}}
            onAnimationEnd={(e) => {setReset(true)}}
        >   
            {device !== 'Mobile' ?
                <TalentWrapper ref={element => (scrollPageRef.current[0] = element)} scrollPage={scrollPage} device={device}>
                    <ImgWrapper device={device}>
                        <Img src={require(`assets/imgs/recruiting/${data['talent'].image}`)} />
                    </ImgWrapper>
                    <Title scrollPage={scrollPage}> 
                        {data['talent'].title}
                        <MouseIconWrapper>
                            <BsMouse size={24}/>
                        </MouseIconWrapper>
                    </Title>
                </TalentWrapper>:
                <TalentWrapper ref={element => (scrollPageRef.current[0] = element)} scrollPage={scrollPage} device={device}>
                    <Title scrollPage={scrollPage} device={device}> 
                        {data['talent'].title}
                    </Title>
                    <ImgWrapper device={device}>
                        <Img src={require(`assets/imgs/recruiting/${data['talent'].image}`)} />
                    </ImgWrapper>
                </TalentWrapper>
            }
            <BenefitWrapper ref={element => (scrollPageRef.current[1] = element)} scrollPage={scrollPage} device={device}>
                <Title scrollPage={scrollPage}> 
                    {data['benefit'].title}
                    {device !== 'Mobile' &&
                        <MouseIconWrapper>
                            <BsMouse size={24}/>
                        </MouseIconWrapper>
                    }
                </Title>
                <ImgWrapper scrollPage={scrollPage} device={device}>
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
    ${({device}) => device === 'Mobile' && css`
        margin-top: -32px;
    `}
`;
const TalentWrapper = styled.div`
    ${({theme, device}) => device !== 'Mobile' ? theme.divCommon.flexCenter : theme.divCommon.flexColumnCenterCenet}
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
    ${({theme, device}) => device !== 'Mobile' ? theme.divCommon.flexCenter : theme.divCommon.flexColumnCenterCenet}
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
    ${({scrollPage, device}) => device !== 'Mobile' && scrollPage === 0 ? css`
        margin-left: 40px;
        margin-top: -16px ;
    `:css`
        margin-right: 40px;
        margin-top: 8px;
    `}
    ${({device}) => device === 'Mobile' && css`
        margin-bottom: -16px;
    `}
    font-size: 4rem;
    height: fit-content;
    border: none;
`;
const ImgWrapper = styled.div`
    max-width: ${({scrollPage, device}) => device === 'Mobile' ? '100%' : scrollPage === 1 ? '60%' : '50%'};
`;
const Img = styled.img`
    width: 100%;
`;
const MouseIconWrapper = styled.div`
    ${({theme}) => theme.divCommon.flexCenterCenter}
    @keyframes mouseMove {
        0%{
            transform: translateY(-10px);
        }
        50%{
            transform: translateY(10px);
        }
        100%{
            transform: translateY(-10px);
        }
    }
    animation-direction: reverse;
    animation: mouseMove 1.5s ease-in-out infinite alternate;
    margin: 16px;
`;

export default RecruitingTalentBenefit;