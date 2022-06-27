# react-player
 - 설치 
```
npm i react-player
```
 - 사용
```
import ReactPlayer from 'react-player/lazy';
<ReactPlayer
                    className='react-player'
                    url={''}    // 플레이어 url
                    width='800px'         // 플레이어 크기 (가로)
                    height='500px'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={true}          // 자동 재생 on
                    controls={true}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                    poster={''}   // 플레이어 초기 포스터 사진
                    onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
                />
```
 - 연속재생
```
<ReactPlayer
  url={[
    'https://www.youtube.com/watch?v=oUFJJNQGwhk',
    'https://www.youtube.com/watch?v=jNgP6d9HraI'
  ]}
/>
```
   - Youtube 경우 영상 링크를 배열로 넣어주면 자동 재생
   - Youtube가 아닌 링크는 영상이 끝났을 때 자동 재생이 지원되지 않는다...
```
import ReactPlayer from 'react-player/lazy';
import React, {useEffect, useState} from "react";

type VideoPlayerProps = {
    title: string;
    vodPlaylistId: string;
}

const VideoPlayer = ({title, vodPlaylistId}: VideoPlayerProps) => {
    const [playIndex, setPlayIndex] = useState(0);
    const playList = [
        {index:1, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'},
        {index:2, url: 'http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8'},
        {index:3, url: 'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8'}
    ];

    const handleNextVideo = (video: string | any[], playIndex: number) => {
        if(playIndex === video.length - 1){
            setPlayIndex(0);
        }else{
            setPlayIndex(playIndex + 1);
        }
    }

    const selectVideo = (index: number) => {
        setPlayIndex(index);
    }

    if(playList === null) return <p>Loading...</p>;

    return (
        <>
            <h2>Player Test</h2>
            <ReactPlayer
                url={playList[playIndex].url}
                playing
                controls
                muted
                progressInterval={1000}
                pip={true}
                onEnded={() => {handleNextVideo(playList, playIndex)}}
                width={'800px'}
                height={'500px'}
            />
        </>
    )
}

export default VideoPlayer;
```
 - 핵심 코드는 onEnded 함수!! 영상이 끝나면 실행되는 이벤트!