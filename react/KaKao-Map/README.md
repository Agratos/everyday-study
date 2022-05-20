# script SDK 추가 위치
```
// public.index.html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta rel="icon" href="%PUBLCI_URL%/favicon.ico" />
    <script type="text/JavaScript" src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=-------------------------------"></script>
    <title>Agratos</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

```
 - public.index.html 에다가 추가를 해준다.
 - appkey에다가 카카오 developer에서 할당 받은 key 를 넣어준다.

# Map 기본 사용
```
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Map = styled.div``;

const KakaoMap = () => {
    let map;
    let marker;

    const options = {
        center: new window.kakao.maps.LatLng(----------------, -----------------), //지도의 중심좌표
        level: 2, //지도의 레벨(확대, 축소 정도)
    };

    const container = useRef(null); //지도를 담을 영역의

    useEffect(() => {
        map = new window.kakao.maps.Map(container.current, options) //지도 생성 및 객체 리턴
        map.setDraggable(false); // 지도 드래그 불가
        map.setZoomable(false); // 지도 확대 불가
        marker = new window.kakao.maps.Marker({
            position: map.getCenter() // 지도 중심 좌표 가져오기
        })
        marker.setMap(map) // 마커 맵에다가 적용
    }, []);
    return (
        <Wrapper>
            <Map
                className="map"
                style={{ width: "40vw", height: "70vh" }} // 맵 크기 설정
                ref={container} // component에 map container 할당
            />
        </Wrapper>
    )
}
export default KakaoMap;
```
# 길찾기 연동
```
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    z-index: 2;
`;
const Map = styled.div`
    z-index: 1;
`;

const KakaoMap = () => {
    let map;
    let marker;

    const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(--------------, ------------), //지도의 중심좌표.
        level: 2, //지도의 레벨(확대, 축소 정도)
        // marker: {
        //     position: new window.kakao.maps.LatLng(--------------, --------------),
        //     text: 'Point-I (5층)'
        // },
    };

    const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

    useEffect(() => {
        map = new window.kakao.maps.Map(container.current, options) //지도 생성 및 객체 리턴
        map.setDraggable(false);
        map.setZoomable(false);
        marker = new window.kakao.maps.Marker({
            position: map.getCenter()
        })
        marker.setMap(map)
    }, []);
    const findPointI = () => {
        window.open('https://map.kakao.com/link/to/Agratos,-------,--------','도착지는 Agratos');
    }
    return (
        <Wrapper>
            <Map
                className="map"
                style={{ width: "40vw", height: "70vh" }}
                ref={container}
                onClick={findPointI}
            />
        </Wrapper>
    )
}
export default KakaoMap;
```
 - ```https://map.kakao.com/link/to/도착지이름,경도(x),위도(y)```
 - 'https://map.kakao.com/link/to/보물위치,37.921031834622924,127.99607157207173'
 - 위의 주소를 링크로 걸어주면 자동으로 카카오맵에서 길 찾기로 이동 후 도착지가 설정

### 나머지 및 참고
 - [카카오 맵 API](https://apis.map.kakao.com/web/sample/)