# 리덕스
### 규칙
- 단일 스토어
- 일기 전용 상태
- 리듀서는 순수 함수
  1. 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받습니다.
  2. 파라미터 외의 값에는 의존하면 안됩니다.
### 액션
```
{
    type: `TOGGLE_VALUE`
}
```
- 액션 객체는 tpye 필드를 반드시 가지고 있어야한다. 액션의 이름과 같다고 생각해도 무방

```
ex)
{
    type: 'ADD_TODO',
    data: {
        id: 1,
        text: '리덕스배우기'
    }
}

{
    type: 'CHANGE_INPUT',
    text: '안녕하세요'
}
```
### 액션 생성 함수
- 액션 생성 함수는 액션 객체를 만들어 주는 함수
- 변화를 일으켜야 할 때마다 액션 객체를 만들어야 하는데 매번 액션 객체를 직접 작성하기 번거롭고, 만드는 과정에서 실수할수도있다.
- 위와같은 일을 방지하기 위해서 함수로 따로 만들어서 관리
```
function addTodo(data) {
    return {
        type: 'ADD_TODO',
        data
    };
}

const changeInput = (text) => ({
    type: 'CHANGE_INPUT',
    text
});
```
### 스트어
- 한개의 프로젝트에는 단 하나의 스토어만 가질 수 있다.
- 스토어 안에는 현재 애플리케이션 상태와 리듀서가 들어가있다.

### 디스패치
- 액션을 발생시키는 것

### 구독
- 구독도 스토어 내장 함수 중 하나
- subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출해 주면 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때마다 호출 된다.
```
const listener = () => {
    console.log('상태가 업데이트됨');
}
const unsubscribe = store.subscribe(listener);

unsubscribe();
```


### 작성
1. 액션 이름을 선언
```
const INCREASE = 'INCREASE';
```
2. 초기값을 설정
```
const initialState = {
    counter = 0,
    count = 0
}
```
3. 리듀서 함수 정의 파라미터로는 state와 action 값을 가져온다.
```
function reducer(state = initialState, action) {
    swtich (action.type) {
        case INCREASE:
           return {
              ...state, // 불변성 유지
                counter: state.counter + 1
           }
        defualt:
            return state;
    }
}
```
4. 스토어 만들기
```
import { createStore } from 'redux';

const store = createStore(redux);
```
5.  render 함수 만들기
```
const render = () => {
    const state = store.getState(); // 현재 상태를 불러오는 함수
    counter.innerText = state.counter
}

render();
```
6. 구독하기
- 리덕스를 사용할 때에는 직접 사용하지 않는다.
- 리덕스 상태를 조회하는 과정에서 react-redux라이브러리가 작업을 대신 해준다.
```
store.subscribe(render);
```
