import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import kakaoData from 'assets/dummy/kakao.json';

const Wrapper = styled.div`
    width: inherit;
    height: inherit;
`;
const Map = styled.div`
    z-index: 1;
    width: inherit;
    height: inherit;
`;

const KakaoMap = () => {
    const location = [
        {latitude:37.521031834622924, longitude:127.03607157207173},
        {latitude:35.81820900081049, longitude:127.10553536304494}
    ];
    const [linePath, setLinePath] = useState([])
    const startLat = 37.521031834622924;
    const startLng = 127.03607157207173;
    const test = []
    kakaoData.map.path.map(({latitude, longitude}) => {
        test.push(new window.kakao.maps.LatLng(latitude,longitude));
    })

    const polyline = new window.kakao.maps.Polyline({
        path: test,
        strokeWeight: 3,
        strokeColor: 'blue',
        strokeOpactiy: 1,
        strokeStyle: 'solid',
    })
    const circle = new window.kakao.maps.Circle({
        center : new window.kakao.maps.LatLng((location[0].latitude + location[1].latitude)/2, (location[0].longitude + location[1].longitude)/2),  // 원의 중심좌표 입니다 
        radius: 95167, // 미터 단위의 원의 반지름입니다 
        strokeWeight: 6, // 선의 두께입니다 
        strokeColor: 'black', // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'dashed', // 선의 스타일 입니다
    }); 
    let map;
    let marker;

    const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(36.7, 127), //지도의 중심좌표.
        level: 13, //지도의 레벨(확대, 축소 정도)
    };

    const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
    
    useEffect(() => {
    },[])

    useEffect(() => {
        map = new window.kakao.maps.Map(container.current, options) //지도 생성 및 객체 리턴
        map.setDraggable(false);
        //map.setZoomable(false);
        location.map(({latitude,longitude}) => {
            marker = new window.kakao.maps.Marker({
                position: new window.kakao.maps.LatLng(latitude, longitude)

            })
            marker.setMap(map);
        })
        window.kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            let clickPosition = mouseEvent.latLng;
            setLinePath([...linePath, new window.kakao.maps.LatLng(clickPosition.getLat(), clickPosition.getLng())])
            //console.log(clickPosition.getLat(),clickPosition.getLng())
        })
        //circle.setMap(map);
        polyline.setMap(map);
    });
    console.log(linePath);
    
    const findPointI = () => {
        window.open('https://map.kakao.com/link/to/포인트아이,37.521031834622924,127.03607157207173','포인트아이 길찾기');
    }
   
    return (
        <Wrapper>
            <Map
                className="map"
                ref={container}
                //onClick={findPointI}
            />
        </Wrapper>
    )
}

export default KakaoMap;
