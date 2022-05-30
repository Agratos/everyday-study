# Prop-Drilling 란
 - props를 하위 컴포넌트로 전달하는 과정
```
const GrandParent = () => {
  return(
    <Parent food={'배가 고파'}>
  )
}
const Parent = ({ food }) => {
  return(
    <Child food={food}>
  )
}
const Child = ({ food }) => {
  return(
  ... 반복
  )
}
```
# 문제점
 - 프로젝트가 작을 때는 상관이 없다...
 - 프로젝트가 커지거나 다른 컴포넌트들을 거쳐 가야하는 상황이라면 props를 추적하기 어렵다...

# 해결
 1. 전역 상태 라이브러리 사용
  - redux, Mobx, recoil..
 2. chilren 사용
```
import React from "react";
import "./styles.css";

export default function App() {
  const content = "Who needs me?";
 return (
    <div className="App">
      <FirstComponent>
        <SecondComponent>
          <ThirdComponent>
            <ComponentNeedingProps content={content}  />
          </ThirdComponent>
        </SecondComponent>
      </FirstComponent>
    </div>
  );
}

function FirstComponent({ children }) {
  return (
    <div>
      <h3>I am the first component</h3>;
     { children }
    </div>
  );
}

function SecondComponent({ children }) {
  return (
    <div>
      <h3>I am the second component</h3>;
     {children}
    </div>
  );
}

function ThirdComponent({ children }) {
  return (
    <div>
      <h3>I am the third component</h3>
        {children}
    </div>
  );
}

function ComponentNeedingProps({ content }) {
  return <h3>{content}</h3>
}
```
- children 보다는 전역 상태 관리 라이브러리를 사용하는 것이 더 좋아보임...