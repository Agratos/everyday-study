# React 컴포넌트를 만들 때 2가지 방식
 1. 클래스 컴포넌트
 2. 함수 컴포넌트
 - 공식 문서에는 함수 컴포넌트와 react hook을 함께 사용하는 것을 권장

# 왜 함수형 컴포넌트인가
 - 함수형 컴포넌트는 state를 사용하지 않고 단순하게 데이터를 받아서 props를 UI에 뿌려준다.
 - Hook들을 필요한 곳에 사용하며 로직의 재사용이 가능하다는 장점이 있다.

## 컴포넌트 기능
 1. 프리젠테이션(presentational) 컴포넌트
 2. 컨테이너(container) 컴포넌트

### 프리젠테이셔널 컴포넌트
 - View 만을 담당하는 컴포넌트(UI 담당)
 - 이 컴포넌트 안에서는 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트 둘 다 사용 가능
 - 리덕스 스토어에 직접적으로 접근하지 않고 props로만 데이터 함수를 가져온다.
 - 순수한 컴포넌트로 state를 사용하지 않으며 state가 있을 경우 데이터가 아닌 UI에 대한 state여야 한다.
 - 주로 함수형 컴포넌트로 작성

### 컨테이너 컴포넌트
 - 다른 프레젠테이션 컴포넌트나 컨테이너 컴포넌트를 관리
 - 내부에 DOM 엘리멘트를 (UI) 작성하지 않는다 (사용하는 경우도 감싸는 용도)
 - 스타일을 가지고 있지 않는다.
 - 스타일은 모두 프레젠테이셔널 컴포넌트 내부에 정의되어야 한다.
 - 상태를 가지고 있고 리덕스에 직접 접근하여 데이터를 가져온다
 - dispatch를 하는 함수를 여기서 구현한다

# 다른점
## 1. 선언방식
 - 클래스형 컴포넌트와 함수형 컴포넌트의 역할은 동일하다.
 - ### 클래스형 컴포넌트
    - class 키워드 필요
    - Component 상속받아야함
    - render() 메소드 필요
    - state, lifeCycle 관련 기능 사용 가능
    - 함수형보다 메모리 더 사용함....
    - 임의 메소드를 정의 할 수 있다.
    <img src="https://blog.kakaocdn.net/dn/dE3KNx/btq4bC1Sx6n/s3uqvdKDpEtZvTfymIt8E0/img.png">
 - ### 함수형 컴포넌트
    - state, lifeCycle 관련 기능사용 대신 Hook 사용
    - 클래스형보다 메모리 덜 사용함
    - 컴포넌트 선언이 편하다
    - 일반 함수와 화살표(ES6) 함수 차이
      - 일반 함수는 자신이 종속된 객체를 this로 가리킨다.
      - 화살표 함수는 (() => {}) 자신이 종속된 인스턴스를 가르킨다.
    <img src="https://blog.kakaocdn.net/dn/tacXq/btq36qPuDmE/k5qJGmK7EZXYBwVMRh1vD0/img.png">
## 2. state
 - state : 컴포넌트 내부에서 바뀔 수 있는 값
 - ### 클래스형 컴포넌트
    - constrctor 안에서 this.state 초기 값 설정 가능 
    - constrctor 없이도 바로 state 초기값을 설정 가능
    - this.setState()를 통해 state 값을 변경
    - 클래스형의 state는 객체 형식
    <img src="https://blog.kakaocdn.net/dn/dr4J7N/btq39j3ms0Z/2y4VbpRBFgbnk4v3xupAXk/img.png">
 - ### 함수형 컴포넌트
    - useState Hook 으로 state 관리
    <img src="https://blog.kakaocdn.net/dn/erT3Tu/btq39VOQbmI/DkkJ4zgv07QMpHIaITqzpK/img.png">
## 3. props
 - props란
   1. 컴포넌트 속성을 설정
   2. 일기 전용 (컴포넌트 자체 props를 수정하면 안된다.)
   3. 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야한다.
   4. 수정되는 값은 state
 - ### 클래스형 컴포넌트
    - this.props로 통해 값을 불러올 수 있다.
    <img scr="https://blog.kakaocdn.net/dn/Bl6mU/btq38lGZ39S/vzQXQCurYJenEmZbP2lOd0/img.png">
 - ### 함수형 컴포넌트
    - props를 불러올 필요 없이 바로 호출 할 수 있다.
    - 단 호출하는 쪽에서 props를 전달해줘야 한다.
    <img src="https://blog.kakaocdn.net/dn/Da7MT/btq4bL5MOl1/wBFPHoNtBIAnk2Zh71NY7K/img.png">
## 4. 이벤트 핸들링
 - ### 클래스형 컴포넌트
    - 함수 선언시 화살표 함수로 바로 선언 가능하다.
    - 요소에 저굥ㅇ할때 this.를 붙여줘야한다.
     <img src="https://blog.kakaocdn.net/dn/bKhjkN/btq3531Mc9I/zel66LT800orj2qJK5Eyz1/img.png">
 - ### 함수형 컴포넌트
    - const + 함수 형태로 선언해야 한다.
    - 요소에 적용할때 this가 필요 없다.
     <img src="https://blog.kakaocdn.net/dn/clJXT1/btq38lfX1G3/H0VK6fKmuGsIa39G2OUxe0/img.png">
## 5. LifeCycle
 - LifeCycle
   1. React에서 컴포넌트는 여러 종류의 "생명주기메소드"를 가지며 이 메소드를 오버리이딩(상속하여 재정의) 하여 특정 시점에 코드가 실행되도록 설정
   2. 클래스 컴포넌트에만 해당되는 내용이며, 함수형 컴포넌트는 Hook을 사용하여 생명주기에 원하는 동작을 실행
<img src="https://user-images.githubusercontent.com/66058308/170153904-e8a4010a-775b-4126-b46f-4c9ab0d5b501.png">
   

### 참고 사이트 : [https://born-dev.tistory.com/27](https://born-dev.tistory.com/27)