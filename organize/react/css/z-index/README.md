# z-index
 - 위치 지정 요소, 자손 또는 하위 플렉스 아이템의 z 축 순서를 지정
 - 더 큰 z-index 값을 가진 요소가 작은 값의 요소 위를 덮습니다.
```
/* 키워드 값 */
z-index: auto;

/* <integer> 값 */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* 음수 값으로 우선순위를 낮출 수 있음 */

/* 전역 값 */
z-index: inherit;
z-index: initial;
z-index: unset;
```
## 주의사항
 ### 1. natural stacking order 규칙
  - 요소들에 z-index가 설정 되지 않아도 stacking order에 의해 요소들의 위치가 결정
  - z index 설정 안 하면 자동으로 설정
 ### 2. Element의 위치가 설정 되지 않았을때
  - element의 위치를 설정하려면 static이 아닌 relative, absolute와 같은 값을 css의 position 속성을 추가해야한다.
  - 추가를 안 하면 z-index 적용 안됨
  - static을 사용하면 쌓임요소(z-index)에서 따로 나와서 적용
 ### 3. opacity or transform 같은 css 속성을 설정하면 element가 새로운 stacking context에 배치
  - opacity or transform을 추가하면 z-index : 0 것처럼 동작
  - opacity 나 transform을 사용후에는 z-index로 위치를 표시해줘야 원하는 곳에 배치가능 
 ### 4. z-index는 부모 요소 안에서만 우선순위가 있다.
```
.content {
    position: relative;
    z-index: 1;
}
.modal {
    position: fixed;
    z-index: 100;
}
.side-tab {
    position: fixed;
    z-index: 5;
}

<section class="content">            
    <div class="modal"></div>
</section>
<div class="side-tab"></div>
```
  - 위와 같은 경우 modal은 tap에 가려지게 된다.
  - modal의 z-index 가 100 이어도 부모인 content의 z-index가 1이기 때문에 side-tab의 z-index에 의해 우선순위가 밀린다.
  - modal 같은 경우 우선순위를 주고 싶다면 content에서 빠져나와서 따로 등록을 하던가 아니면 모든 z-index를 없애주면 된다.
