# useRef
 - 특정 DOM을 선택할 때 사용
 - Javascript에서는 document.getElementById를 통해서 해당 DOM을 선택
 - React에서는 useRef를 사용
 - 외부 라이브러리 사용할때 유용
 - id를 사용하면 안되는 이유: 같은 컴포넌트를 여러 번 사용 하면 중복된 id를 가진 DOM이 생김
 - ref는 컴포넌트 내부에서만 작동
 - DOM을 직접적으로 건드려야할때만 사용
   - 특정 input에 포커스 주기
   - 스크롤 박스 조작하기
   - Canvas 요소에 그림 그리기등...
- 클래스형 컴포넌트 보다는 함수형 컴포넌트를 더 많이 사용
# 사용법
 - 함수형 컴포넌트 : useRef Hook(콜백함수) 사용
```
<input ref={(ref) => {this.input=ref}} />
// 앞으로 this.input은 input 요소의 DOM을 나타냄
// ref이름은 원하는것으로 자유롭게 지정 가능
```
 - 클래스형 컴포넌트 : React.createRef(React에 내장되어 있음) 사용
```
import React, { Component } from 'react';

class RefSample extends Component {
  input = React.createRef();
  
  handleFocus = () => {
    this.input.current.focus();
  }

  render(){
    return (
      <div>
        <input ref={this.input} />
      </div>
    )
  }
}
export default RefSample;
```
   1. 멤버 변수로 React.createRef()를 담기
   2. 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어주면 끝
   3. 접근 : this.input.current를 조회 (콜백함수는  current 사용 X)
