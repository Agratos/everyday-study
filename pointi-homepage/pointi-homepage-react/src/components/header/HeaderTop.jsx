import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import KakaoShare from 'containers/kakao/KaKaoShare';

import mail from 'assets/imgs/header/mail.png';
import phone1 from 'assets/imgs/header/phone1.png';
import phone2 from 'assets/imgs/header/phone2.png';
import kakao from 'assets/imgs/header/kakao.png';
import facebook from 'assets/imgs/header/facebook.png'
import logo from 'assets/imgs/custom/logo.png';

const Wrapper = styled.div`
    background-color: white;
    padding: 8px;
`;
const HeaderTopArea = styled.div`
    display: flex;
    margin: 0 5vw 0 5vw;
`;
const HeaderTopLeftArea = styled.div`
    width: 41vw;
`;
const LeftLogoArea = styled.div`
    padding: 0 16px 0 16px;
    width: 25%;
`;
const LeftLogo = styled.img`
    width: 113px;
    height: 40px;
    &:hover{
        cursor: pointer;
    }
`;
const HeaderTopRightArea = styled.div`
    display: flex;
    width: 57vw;
`;
const TopRightAreaLeft = styled.div`
    width: 46vw;
    text-align: right;
    margin: 8px;
`;
const TopRightAreaLeftt = styled.div``;
const TopRightAreaInner = styled.div`
    display: flex;
    text-align: left;
    float: right;
    margin-right: 3vw;
    :hover {
        cursor: pointer;
    }
`;
const TopRightAreaRight = styled.div`
    margin: 8px;
    width: 11vw;
`;
const SocialImg = styled(TopRightAreaInner)`
    float: left;
    margin-right: 1vw;
`;
const Img = styled.img`
    float:left;
    width: ${props => props.size || '24px'} ;
    height: ${props => props.size || '24px'};
    margin-right: 4px;
    padding-top: ${props => props.padding};
    margin: auto 4px;
`;
const ImgText = styled.a`
    padding: ${props => props.padding || '2px'};
    margin: 0;
    text-decoration-line: none;
    color: black;
`;
const HeaderTop = () => {
    return (
        <Wrapper>
            <HeaderTopArea>
                <HeaderTopLeftArea>
                <LeftLogoArea>
                    <Link to='/' ><LeftLogo src={logo} /></Link>
                </LeftLogoArea>
                </HeaderTopLeftArea>
                <HeaderTopRightArea>
                    <TopRightAreaLeft>
                        <TopRightAreaLeftt>
                            <TopRightAreaInner>                     
                                <Img src={phone2} size='16px' padding='2px' />
                                <ImgText>02-2204-3001</ImgText>                                
                            </TopRightAreaInner>
                            <TopRightAreaInner>
                                <Img src={phone1} size='16px' padding='2px' />
                                <ImgText>02-2204-3000</ImgText>      
                            </TopRightAreaInner>
                            <TopRightAreaInner>
                                <Img src={mail} size='16px' padding='4px' />
                                <ImgText href={'mailto:support@pointi.com'} target={'top'}>support@pointi.com</ImgText>  
                            </TopRightAreaInner>
                        </TopRightAreaLeftt>
                    </TopRightAreaLeft>
                    <TopRightAreaRight>
                        <KakaoShare imgUrl={kakao}/>
                        <SocialImg><ImgText target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.pointi.com%2F&amp;src=sdkpreparse" padding={`0px`}><Img src={facebook} /></ImgText></SocialImg>        
                    </TopRightAreaRight>
                </HeaderTopRightArea>
            </HeaderTopArea>
        </Wrapper>
    )
}

export default HeaderTop;