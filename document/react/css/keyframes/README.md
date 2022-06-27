# @keyframes
 - 개발자가 애니메이션 중간 중간의 특정 지점들을 거쳐 진행 할 수 있는 특이점을 설정
 - keyframe안에 애니메이션이 안되는 속성을 작성하면 무효
 - !important를 사용시 무효 처리
```
import styled from 'styled-component';
<style>
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
}
@keyframes identifier {
  0% { top: 0; left: 0; }
  30% { top: 50px; }
  68%, 72% { left: 50px; }
  100% { top: 100px; left: 100%; }
}
</style>

const Animation = styled.div`
  animaiton: slidein 1s;
`
```