# Flex 정리
## Flex 정의
- 요소의 크기가 불분명하거나 동적인 경우에도 각 요소를 정렬할 수 있는 효율적인 방법을 제공
- Flex는 Container와 Items의 2가지 개념 존재
- Container는 Items를 감싸는 부모 요소이며 각 Item을 정렬하기 위해선 Container가 필수
- Container와 Items에 적용하는 속성이 구분되어 있다.
  - Container: dispaly, flex-flow, justify-content...
  - Items: order, flex, align-self...

## Flex Container
- display : Flex Container를 정의
- flex-flow : flex-direction 과 flex-wrap의 단축 속성
- flex-direction : flex items의 주 축(main-axis)을 설정
- flex-wrap : flex items의 여러 줄 묶음(줄 바꿈) 설정
- justify-content : 주 축(main-axis)의 정렬 방법을 설정
- align-content : 교차 축(cross-axis)의 정렬 방법을 설정(2줄 이상)
- align-items : 교차 축(cross-axis)에서 items의 정렬 방법을 설정(1줄)
## Display
- display: flex, display: inline-flex
  - flex : Block 특성의 flex container를 정의
  - inline-flex : inline 특성의 flex container를 정의
    - inline : 가로 나열, 요소와 요소 사이에 공간이 없고 요소 크기를 지정해도 반영되지 않는다.
      - widh, height, margin, padding-top, bottom, line-height를 적용할 수 없다.
    - block : 세로 나열이고 요소 사이에 공백이 없다.(크기 지정 가능)
    - inline-block : 가로 나열이고 요소 사이에 공백이 있다.(크기 지정 가능)
![image](https://user-images.githubusercontent.com/66058308/163786132-c2d2ee25-8b84-448c-a410-5bd5569c8895.png)
![image](https://user-images.githubusercontent.com/66058308/163786186-7ba6cd08-b810-4530-8317-c7104f26365b.png)
### flex-flow
- 이 속성은 단축 속성으로 flex items의 주 축(mian-axis)를 설정하고 items의 여러 줄 묶음도 설정합니다.
```
flex-flow: 주축 여러줄묶음;
.flex-container {
  flex-flow: row-reverse wrap;
}
```
### flex-direction
```
  - row : items를 수평축(왼쪽에서 오른쪽으로) 표시 <기본값>
  - row-reverse : items를 row 반대로 표시
  - column : items를 수직축(위에서 아래로) 표시
  - column-reverse : items를 column 반대로 표시
```
![image](https://user-images.githubusercontent.com/66058308/163786742-515b6745-58ec-446d-ac78-c728bd74f17b.png)
### flex-wrap
```
  - nowrap : 모든 items를 여러 줄로 묶지 않음(한 줄에 표시) <기본값>
  - wrap : items를 여러 줄로 묶음
  - wrap-reverse : items를 wrap의 역방향으로 여러 줄로 묶음
```
![image](https://user-images.githubusercontent.com/66058308/163787777-aea0f3f2-e30d-4375-96e3-c4d72ecc9444.png)
### justify-content
```
  flex-start : items를 시작점으로 정렬 <기본값>
  flex-end : items를 끝점으로 정렬
  center : items를 가운데 정렬
  space-between : 시작 item은 시작점에, 마지막 item은 끝점에 정렬되고 나머지 items는 사이에 고르게 정렬됨
  spave-around : items를 균등한 여백을 포함하여 정렬
```
![image](https://user-images.githubusercontent.com/66058308/163788361-3c6f3e24-6d56-496b-8dd5-87f41c391939.png)
### align-content
```
  stretch : Container의 교차 축을 채우기 위해 items를 늘림
  flex-start : items를 시작점으로 정렬
  flex-end : items를 끝점으로 정렬
  center : items를 가운데 정렬
  space-between : 시작 item은 시작점에 마지막 item은 끝점에 정렬 나머지는 item 사이에 고르게 정렬
  space-around : items를 균등한 여백을 포함하여 정렬
```
- flex-wrap 속성을 통해 items가 여러줄(2줄이상) 이고 여백이 있을 경우에만 사용 가능
![image](https://user-images.githubusercontent.com/66058308/163788942-a2127816-d590-4e01-932d-074358599ede.png)
### align-items
```
  stretch : container의 교차 축을 채우기 위해 items를 늘림
  flex-start : items를 각 줄의 시작점으로 정렬
  flex-end : items를 긱 줄의 끝점으로 정렬
  center : items를 가운데 정렬
  baseline : items를 문자 기준선에 정렬
```
![image](https://user-images.githubusercontent.com/66058308/163789324-67ed5b64-645e-415a-bff1-71d0b42affbe.png)
## Flex itmes
```
  order : flex item의 순서를 결정
  flex : flex-grow, flex-shrink, flex-basis
  flex-frow : flex item의 증가 너비 비율을 설정
  flex-shrink : flex item의 감소 너비 비율을 설정
  flex-basis : flex item의 (공간배분전) 기본 너비 설정
  align-self : 교차 축에서 item의 정렬 방법을 설정
```
### order
- item의 순서를 설정
- item에 숫자를 지정하고 숫자가 클수록 순서가 밀린다. 음수 허용
- HTML 구조와 상관없이 순서를 변경할 수 있다.
![image](https://user-images.githubusercontent.com/66058308/164129353-f9936afc-75f8-432f-847b-b70627776f57.png)
### flex
```
  flex-grow : item의 증가 너비 비율 설정 <기본 : 0>
  flex-shrink : item의 감소 너비 비율 설정 <기본 : 1>
  flex-basis : item의 공간 분배 전의 너비 설정 <기본 : auto>
```
```
.item {
  flex: 1 1 20px;  /* 증가너비 감소너비 기본너비 */
  flex: 1 1;  /* 증가너비 감소너비 */
  flex: 1 20px;  /* 증가너비 기본너비 (단위를 사용하면 flex-basis가 적용됩니다) */
}
```
- flex-grow를 제외한 개별 속성은 생략 가능
- flex:1 로 작성하면 flex-grow:1과 같다
- 위와 같은 경우 나머지 속성은 생략했으니 기본 값 적용
- 단 flex-basis의 기본갑인 auto는 flex에서 생략시 0 적용
### flex-grow
```
  flex-grow : 증가 너비
```
- item의 증가 너비 비율을 설정
- 숫자가 크면 더 많은 너비를 가집니다.
- item이 가변 너비가 아니거나 값이 0일 경우 효과가 없다.
![image](https://user-images.githubusercontent.com/66058308/164130103-0a4b841f-e5db-400a-b584-63b040aff232.png)
![image](https://user-images.githubusercontent.com/66058308/164130194-66f7da20-c2d1-40b8-9bbd-a6bd1e907f43.png)
### flex-shrink
```
  flex-shrink: 감소 너비
```
- item이 감소하는 너비의 비율을 설정
- 숫자가 크면 더 많은 너비가 감소
- item이 가변 너비가 아니거나 값이 0일 경우 효과가 없다.
- flex-shrink는 요소의 너비에 영향을 받기 때문에 계산하기 힘듬
- 영향을 받는 다는 요소의 너비는 width, height, flex-basis 등으로 너비가 지정된 경우
- Container의 너비가 줄어 Item의 너비에 영향을 미칠 경우 영향을 미치기 시작한 지점부터 줄어든 거리 만큼 감소 너비 비율에 맞게 item의 너비가 줄어듬
![image](https://user-images.githubusercontent.com/66058308/164130551-e583735e-32ec-42ce-81ef-83e91d9b15b2.png)
### flex-basis
```
  flex-basis: 기본 너비
```
- item의 공간 배분 전 기본 너비를 설정
- 값이 auto일 경울 width, height 등의 속성으로 item의 너비를 설정할 수 있다.
- 하지만 단위 값이 주어질 경우 설정할 수 없다.
- flex 속성에서 단축 속성 내에서 flex-basis를 생략하면 값이 0 이 된다
![image](https://user-images.githubusercontent.com/66058308/164130816-a8e09a8c-f1bc-4d02-b1cf-c7c40b5d81e3.png)
### align-self
- 교차 축에서 개별 item의 정렬 방법을 설정
- align-items 는 Container 내 모든 items의 정렬 방법을 설정
- 필요해 의해 일부 Item만 정렬 방법을 사용할 경우 align-self를 사용
```
  auto : Container의 align-items를 상속 <기본>
  stretch : Container의 교차 축을 채우기 위해 Iem을 늘림
  flex-start : item을 각 줄의 시작점 으로 설정
  flex-end : item을 각 줄의 끝점으로 정렬
  center : item을 가운데 정렬
  baseline : item을 문자 기준선에 정렬

align-self: 정렬 방법
```
![image](https://user-images.githubusercontent.com/66058308/164131267-00e3ec98-fbf5-4dcf-804b-625b8fe95650.png)


[이미지 출처 및 참고](https://heropy.blog/2018/11/24/css-flexible-box/)