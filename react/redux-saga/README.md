# 미들웨어

### 1. 미들워에란
- 액션을 디스패치했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행한다.
- 여러 종류의 작업을 처리할 수 있다.
- 특정 조건에 따라 액션을 무시하게 할 수도 있다.
- 특정 조건에 따라 액션 정보를 가로채서 변경한 후 리듀서에게 전달해 줄 수도 있다.
- 특정 액션에 기반하여 새로운 액션을 여러 번 디스패치 할 수도 있다.
- 네트워크 요청과 같은 비동기 작업을 관리하면 매우 유용하다.

```
액션 -> 미들웨어 -> 리듀서 -> 스토어
```
### 2. next 파라미터
- 함수형태이며 store.dispatch와 비슷한 역할을 한다.
- next(action)을 호출하면 그다음 처리해야 할 미들웨어에게 액션을 넘겨준다.
- 만약 그다음 미들웨어가 없다면 디듀서에게 액션을 넘겨준다.


### 3. redux-saga
```
yarn add redux-saga
npm install redux-saga
```
- 기존 요청을 취소 처리해야 할 때(불필요한 중복 요청 방지)
- 특정 액션이 발생했을 때 다른 액션을 발생 시키거나 API 요청 등 리덕스와 관계없는 코드를 실행할 때
- 웹소켓을 사용할 때
- API 요청 실패 시 재요청해야 할 때
- 비동기 작업을 관리!
- 우리가 디스패치하는 액션을 모니터링해서 그에 따라 필요한 작업을 따로 수행할 수 있는 미들웨어
- 액션이 중첩되어 디스패치되었을 때는 기존 것들은 무시하고 가장 마지막 액션만 제대로 처리


### 4. 제너레이터( generator )
```
function* generatorFunction() {
  console.log('hi');
  yield 1;
  console.log('generator function');
  yield 2;
  console.log('funtion');
  yield 3;
  return 4;
}
```
- 제너레이터 함수를 만들 때는 function* 키워드를 사용
```
const generator = generatorFunction();
```
- generator.next() 제너레이터 함수를 실행한다.
- next가 실행되면 yield가 있는 곳까지 호출하고 멈춘다.
- next()에 파라미터를 넣으면 yield를 사용하여 해당 값을 조회할 수도 있다.


### 5. redux-saga 유용한 기능
- select : saga 내부에서 현재 상태를 참조해야 하는 상황이 생기면 사용
```
const number = yield select(state => state.counter);
```
- throttle : 사가가 실행되는 주기를 제한
```
yield throttle(3000, ICREASE_ASYNC, increaseSaga);
```
- takeLatest : 기존에 실행 중이던 작업이 있다면 취소 후 가장 마지막으로 실행된 작업만 수행
```
takeLatest(DECREASE_ASYNC, decreaseSaga);
```











