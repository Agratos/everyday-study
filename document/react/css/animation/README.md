# animation
 - 엘리먼트에 적용되는 CSS 스타일을 다른 CSS 스타일로 부드럽게 전환
 - 애니메이션을 표현하는 keyframes로 이루어짐
 - 자바스크립트를 이용한 애니메이션은 잘 만들어졌어도 성능이 좋지 못할때가 있다.
 - CSS 애니메이션은 frame-skipping 같은 기술을 이용하여 최대한 부드럽게 렌더링
 - 안 보이는 엘리먼트에 대한 애니메이션은 업데이트 주기를 줄여 부하를 최소화할 수 있다.

# animation vs transition ?
### animation
 - 트렌지션보다 할 수 있는것이 겁나 많음
 - 트렌지션은 시작하기 위해 이벤트가 필요하지만 애니메이션은 시작 정지 반복 까지 제어가능

### transition
 - 요소의 변화를 일정 기간동안 일어나게 함
 - 자동으로 발동되지 않음( hover onClick )같은 이벤트 트리거에 의해 동작
 - 또는 자바스크립트로 CSS 동적으로 변화할 때 도 사용 가능
 - 모든 요소들의 크기나 위치를 재계산 하게 되는데 영향을 받는 요소들이 많을수록 많은 부하가 감

# animation 속성
- ### animation-delay : 애니메이션 적용 뒤에 선언을 해줘야 적용
- ### animation-direction : 애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정
```
/* Single animation */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Multiple animations */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;
```
- ### animation-duration
- ### animation-iteration-count : 애니메이션이 몇 번 반복될지 지정 infiite로 무한히 반복
- ### animation-name : 이 애니메이션의 중간 상태를 지정, 중간 상태는 @keyframes 규칙을 이용하여 기술
- ### animation-play-state : 애니메이션을 멈추거나 다시 시작할 수 있다.
```
/* Single animation */
animation-play-state: running;
animation-play-state: paused;

/* Multiple animations */
animation-play-state: paused, running, running;
```
- ### animation-timing-function : 중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정
```
https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function 참고
cubic-bezier // 사용자 지정
```
- ### animation-fill-mode : 애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정
```
/* Single animation */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Multiple animations */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;
```