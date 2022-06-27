# 텍스트가 div를 벗어날때 처리 방법
 - 줄 바꿈
 - 스크롤

## 줄 바꿈
```
css`
 word-break: normal;
 word-break: break-all;
 word-break: keep-all;
 word-break: break-word;
`
```
 - normal: 일반적인 규칙 - 텍스트가 div를 벗어남
 - break-all: div를 벗어나는 시점부터 줄 바꿈 단어도 잘림
 - keep-all: 한중일 텍스트에서는 줄을 바꿀 때 단어를 끊지 않는다. 다른 언어는 normal과 동일
 - break-word: overflow-wrap 속성에 상관하지 않고 word-brak: normal과 overflow-wrap: anywhere를 설정한 값과 동일

```
css`
 /* Keyword values */
 overflow-wrap: normal;
 overflow-wrap: break-word;
 overflow-wrap: anywhere;

 /* Global values */
 overflow-wrap: inherit;
 overflow-wrap: initial;
 overflow-wrap: unset;
`
```
 - normal: 줄이 (오직 두 단어 사이의 공백과 같이) 보통의 줄 바꿈 지점에서만 줄을 바꿉니다.
 - break-word: 단어들이 안 깨지는 선에서 줄을 바꾼다.
 - anywhere: 글자가 깨지던 말던 div 넘어가면 자동 줄 바꿈

## 스크롤(scroll)
```
css`
 overflow: visible;
 overflow: hidden;
 overflow: scroll;
 overflow: auto;
`
```
 - visible: 글자가 div 벗어나도 계속 보여짐
 - hidden: 글자가 div 벗어나면 div 위치까지만 보여짐
 - scroll: 글자가 div 벗어나면 스크롤 생성 (x, y 축 둘 다 생성)
 - auto: 글자가 벗어난 곳만 스크롤 생성