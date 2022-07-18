import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const KakaoMap = ({device}) => {
    const location = [
        {latitude:37.521031834622924, longitude:127.03607157207173,text:'포인트아이 본사 청호빌딩 5층'},
        {latitude:35.8238423, longitude:127.153766, text:'포인트아이 전주 지사 신지식산업센터'}
    ];
    //const [linePath, setLinePath] = useState([])
    // const startLat = 33.669620417716707;
    // const startLng = 127.070803467558335;
    // const length = 94535;
    // const path = []
    // const coordsAround = () => { // 반원 그릴 좌표 자동 계산
    //     let degree = 90;
    //     while(true){
    //         path.push(new window.kakao.maps.LatLng(3+startLat + length / 111190 * Math.sin(degree * Math.PI / 180),startLng + length / 88900  * Math.cos(degree * Math.PI / 180)));
    //         degree += 10; // 각도
    //         if (degree > 270) break;
    //     }
    // }
    // coordsAround();
    // const polyline = new window.kakao.maps.Polyline({
    //     path: path,
    //     strokeWeight: 3,
    //     strokeColor: 'blue',
    //     strokeOpactiy: 1,
    //     strokeStyle: 'solid',
    // })
    // const circle = new window.kakao.maps.Circle({
    //     center : new window.kakao.maps.LatLng((location[0].latitude + location[1].latitude)/2, (location[0].longitude + location[1].longitude)/2),  // 원의 중심좌표 입니다 
    //     radius: 94535, // 미터 단위의 원의 반지름입니다 
    //     strokeWeight: 2, // 선의 두께입니다 
    //     strokeColor: 'black', // 선의 색깔입니다
    //     strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    //     strokeStyle: 'dashed', // 선의 스타일 입니다
    // }); 
    //let map;

    const options = {
        center: new window.kakao.maps.LatLng(36.85, 127),
        level: device === 'Mobile' ? '13' : '12',
    };

    const container = useRef(null);
    
    useEffect(() => {
        const map = new window.kakao.maps.Map(container.current, options)
        // map.setDraggable(false);
        // map.setZoomable(false);
        location.map(({latitude,longitude,text}) => {
            const marker = new window.kakao.maps.Marker({
                map: map,
                position: new window.kakao.maps.LatLng(latitude, longitude),
                clickalbe: true
            })

            var content = `<div style='
                background-color: white; 
                padding: 4px 5px; 
                border-radius: 16px;
                font-size: 12px;
                word-break: keep-all;
                width: 200px;
                text-align: center;
                position: relative;
            '>
            ${text}
            </div>`;

            const infowindow = new window.kakao.maps.InfoWindow({
                content
            });
            infowindow.open(map, marker);

            window.kakao.maps.event.addListener(marker, 'click', () => {
                window.open(`https://map.kakao.com/link/to/${text},${latitude},${longitude}`,'포인트아이 길찾기');  
            });
        })

        //circle.setMap(map);
        //polyline.setMap(map);
    },);
   
    return (
        <Wrapper>
            <Map
                className="map"
                ref={container}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: inherit;
    height: inherit;
`;
const Map = styled.div`
    z-index: 1;
    width: inherit;
    height: inherit;
    
`;

export default KakaoMap;
