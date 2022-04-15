import React from 'react';
import styled from 'styled-components';
import mail from 'assets/imgs/header/mail.png';
import phone1 from 'assets/imgs/header/phone1.png';
import phone2 from 'assets/imgs/header/phone2.png';
import kakao from 'assets/imgs/header/kakao.png';
import facebook from 'assets/imgs/header/facebook.png'

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
const HeaderTopLeftTitle = styled.p`
    margin:8px;
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
    width: 24px;
    height: 24px;
`;
const ImgText = styled.p`
    padding: 2px;
    margin: 0;
`;
const HeaderTop = () => {
    return (
        <Wrapper>
            <HeaderTopArea>
                <HeaderTopLeftArea>
                    <HeaderTopLeftTitle>글로벌IT기업,포인트아이</HeaderTopLeftTitle>
                </HeaderTopLeftArea>
                <HeaderTopRightArea>
                    <TopRightAreaLeft>
                        <TopRightAreaLeftt>
                            <TopRightAreaInner>                     
                                <Img src={phone2} />
                                <ImgText>02-2204-3001</ImgText>                                
                            </TopRightAreaInner>
                            <TopRightAreaInner>
                                <Img src={phone1} />
                                <ImgText>02-2204-3000</ImgText>      
                            </TopRightAreaInner>
                            <TopRightAreaInner>
                                <Img src={mail} />
                                <ImgText>support@pointi.com</ImgText>  
                            </TopRightAreaInner>
                        </TopRightAreaLeftt>
                    </TopRightAreaLeft>
                    <TopRightAreaRight>
                        <SocialImg><Img src={kakao} /></SocialImg>
                        <SocialImg><Img src={facebook} /></SocialImg>
                    </TopRightAreaRight>
                </HeaderTopRightArea>
            </HeaderTopArea>
        </Wrapper>
    )
}

export default HeaderTop;