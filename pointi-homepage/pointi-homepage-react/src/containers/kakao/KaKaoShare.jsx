import React, { useEffect } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div``;
const SocialImg = styled.div`
    display: flex;
    text-align: left;
    float: right;
    margin-right: 3vw;
    :hover {
        cursor: pointer;
    }
    float: left;
    margin-right: 1vw;
`;
const Img = styled.img`
    float:left;
    width: ${props => props.size || '24px'} ;
    height: ${props => props.size || '24px'};
    margin-right: 4px;
    padding-top: ${props => props.padding};
`;

const KakaoShare= ({imgUrl}) => {
  const url = 'http://pointi.com/'; // 현제 url 가져와서 링크 걸수 있게
  useEffect(() => {
    initKakao(); 
  }, []);

  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('54760abcec9d7e541d91b53b4511c1f2'); // 생성한 키
      }
    }
  };

  const shareKakao = () => {
    window.Kakao.Link.sendDefault({ 
      objectType: 'feed',
      content: {
        title: 'Point-I',
        description: '#IT #CoreNF #VAS Solution #AI # AR # IoT #Data Analytics',
        imageUrl: imgUrl,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Wrapper className="share-node" onClick={shareKakao}>
        <SocialImg><Img src={imgUrl} /></SocialImg>
    </Wrapper>
  );
};


export default KakaoShare;