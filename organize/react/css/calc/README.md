# calc()
## 사용 방법
```
width : calc(100% - 80px);
```
1. 덧셈 +
2. 뺄셈 -
3. 곱셈 * 
  - 하나의 피연산자가 number(숫자)이여야 한다.
4. 나눗셈 /
  - 오른쪽 피연산자는 number(숫자)이여야 한다.
## 주의
- 0으로 나누면 HTML 구문분석기에서 오류
- '+ -'는 좌우에 공백이 있어야 한다.
- calc() 함수를 중첩해서 사용하면 내부의 calc()는 단순한 괄호로 간주
- calc() 사용해서 글씨 크기를 조절할땐 피연산자중 하나로 꼭 상대길이 단위를 사용해야한다.
```
font-size: calc(1.5rem + 3vw)
```
## 예제
```
width: calc(100% - 80px);
width: calc(100% - 1em);
width: calc(100% / 6);
```
## 변수와 중첩
```
--widthA: 100px;
--widthB: calc(var(--widthA) / 2);
--widthC: calc(var(--widthB) / 2);
width: var(--widthC);
```
- 모든 변수를 펼치면 widthC의 값은 calc( calc( 100px / 2) / 2) 된다
- 그후에 너비 속석으로 지정될때 모든 중첩 calc는 깊이에 관계없이 단순한 괄호로 바뀌므로 width속성의 값은 calc( ( 100px /2 ) /2 )가 된다.
- calc안의 calc는 괄호와 같다.