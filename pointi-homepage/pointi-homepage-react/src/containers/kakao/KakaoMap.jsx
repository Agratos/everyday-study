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
        center: new window.kakao.maps.LatLng(37.521031834622924, 127.03607157207173), //지도의 중심좌표.
        level: 2, //지도의 레벨(확대, 축소 정도)
        // marker: {
        //     position: new window.kakao.maps.LatLng(37.521031834622924, 127.03607157207173),
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
        window.open('https://map.kakao.com/link/to/포인트아이,37.521031834622924,127.03607157207173','포인트아이 길찾기');
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