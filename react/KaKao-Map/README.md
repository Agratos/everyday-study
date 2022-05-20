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