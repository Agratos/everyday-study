# 2. 리덕스2
- 리액트 프로젝트에서 리덕스를 사용할 때 가장 많이 사용하는 패턴은 프레젠테이셔널 컴포넌트와, 컨테이너 컴포넌트를 분리하는것
- 프레젠테이셔널 컴포넌트란 주로 상태 관리가 이루어지지 않고, 그저 props를 받아 와서 화면에 UO를 보여주기만 하는 컴포넌트
- 컨테이너 컴포넌트는 리덕스와 연동되어 있는 컴포넌트로 리덕스로부터 상태를 받아 오기도하고 리덕스 스토어에 액션을 디스패치하기도 합니다.
- 위와같은것은 필수 사항은 아니지만 코드의 재사용성도 높아지고 관심사의 분리가 이루어져 UI를 작성할 때 좀 더 집중할 수 있다.

### 폴더 관리
```
-actionsw
    -counter.js
    -todos.js
-constants
    -ActionTypes.js
-reducers
    -counter.js
    -todos.js
```
- 가장 일반적인 구조로 actions, constants, reducers 라는 세 개의 디렉터리를 만들고 그안에 기능ㅂ로 파일을 하나씩 만드는 방식
- 리덕스 공식 문서에서도 사용되므로 가장 기본
- 새로운 액션을 만들 때마다 세종류의 파일을 모두 수정해야하기 때문에 물편
```
-modules
    -counter.js
    -todos.js
```
- 액션타입, 액션생성함수, 리듀셔 함수를 기능별로 파일 하나에 몰아서 다 작성하는 방식
- Ducks패턴이라고 부르며 앞서 설명한 일반적인 구조로 디럳그를 사용하다가 불편함을 느낀 개발자들이 자주 사용

### 작성
1. 액션타입 정의
```
// counter.js
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
```
- 문자열 안에 모듈 이름을 넣음으로써 나중에 프로젝트가 커졌을 때 액션의 이름이 충돌되지 않게 도와줌
- ex) SHOW , INITIALIZE 라는 액션은 췹게 중복되는데 앞에다가 모듈의 이름을 붙여주면 중복 방지를 해준다.
2. 액션 생성 함수 만들기
```
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//파라미터가 들어간 액션 객체
export const chabgeInput = (input) => ({
    type: CHANGE_INPUT,
    input
})
```
- export키워드를 추가하는것은 추후 이함수를 다른 파일에서 불러와 사용할 수 있게하기위해
- 파라미터가 들어간 액션객체를 만들때는 추가로 필드가 들어간다.
3. 초기 상태 및 리듀서 함수만들기
```
const initialState = {
    number: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                numbrt: state.number - 1
            };
        default:
            return state;
    }
}

export default counter;
```
- 초기상태 설정
- 마지막으로 export default키워를 사용하여 함수를 내보내줌
- export는 여러 개를 내보낼 수 있지만 export default는 단 한개만 내보낼 수 있다.
- 불러오는 방식도 달라진다.
```
import counter from './counter';
import { increase, decrease } from './counter';
import counter, { increase, decrease } from './counter';
```
4. 루트 리듀서 만들기
```
import { combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';
```
5. 리액트 애플리케이션에 리덕스 적용하기
- 스토어를 만들고 리액트 애플리케이션에 리덕스를 적용하는 작업은 src 디렉토리의 index.js에 이러우진다.
  1. 스토어 만들기
  ```
  //scr index.js
  import  { createStroe } from 'redux';
  import rootReducer from './modules';

  const store = createStroe(rootReducer);
  ```
  2. Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용하기
  ```
  import  { createStroe } from 'redux';
  import { Provider } from 'react-redux';
  import rootReducer from './modules';

  const store = createStroe(rootReducer);

  <Provider stroe={store}>
    <App/ >
  </Provider>
  ```
  3. Redux DebTools 설치
  - 코드가 훨씬 깔끔해진다.
  - 크롬 웹스토어에서 Redux DebTools 설치
  - yarn add redux-devtools-extention
  ```
  import  { createStroe } from 'redux';
  import { Provider } from 'react-redux';
  import { composeWithDebTools } from 'redux-devtools-extension';
  import rootReducer from './modules';

  const store = createStroe(rootReducer, composeWithDebTools());

  <Provider stroe={store}>
    <App/ >
  </Provider>
  ```
  4. 컨테이너 컴포넌트 만들기
  - 컴포넌트와 리덕스를 연동하려면 react-redux에서 제공하는 conncet 함수를 사용해야한다.
  ```
  connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
  ```
  - mapStateToProps는 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정
  - mapDispatchToProps는 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용
  - 이렇게 connect함수를 호출하고 나면 도 다른 함수를 반환
  - 반환된 함수에 컴포넌트를 파라미터로 넣어 주면 리덕스와 연동된 컴포넌트가 만들어진다.
  ```
  const CounterContainer = () => {
      return <Counter />;
  };

  ========================= 위와 같은 코드 =========================
  const makeContainer = connect(mapStateToProps, mapDispatchToprops)
  makeContainer(타깃 컴포넌트)
  ```
  - connect 사용
  ```
  import React from 'react';
  import { connect } from 'react-redux';
  import Counter from '../components/Counter';
  const counterContainer = ({number, increase, decrease}) => {
      return (
          <Counter number={number}, onIncrease={increase} onDevrease={decrease /}>
      );
  };

  const mapStateToProps = state => ({
      increase: () => {
          dispatch(increase());
      },
      decrease: () => {
          dispatch(decrease());
      }
  })

  export default connect(
      mapStateToProps,
      mapDispatchToProps,
  )(CounterContainer);
  ```
  - connect 함수를 사용할 때는 일반적으로 mapStateToProps와 mapDispatchToProps를 미리선언하고 사용
  - cconect 함수 내부에 익명 함수 형태로 선언해도 문제가 되지 않는다.
  ```
  // 아래의 두 코드는 작동 방식이 완전히 같다.
  increase: () => dispatch(increase()),
  ========================================
  increase: () => { return dispatch(increase())}
  ```
  -컴포넌트에서 액션을 디스패치하기 위해 각 액션 생성 함수를 호출하고 dispatch로감싸는 작업이 조금 번거로울 수도 있다.
  - 특히 핵션 생성 함수의 개수가 많아진다면 bindActionCreators 유틸 함수를 사용하면 간편하다.
  ```
  import { bindActionCreators } from 'redux';

  expeort defualt connect(
      state => ({
          number: state.counter.number,
      }),
      dispatch => 
        bindActionCreators(
            {
                increase,
                decrease
            },
            dispatch,
        ),
  )(counterContainer);
  ```
  - mapDispatchToProps에 해당하는 파라미터를 함수 형태가 아닌 액션 생성 함수로 이루어진 객체 형태로 넣어주면 더 편하다.
  ```
  export default connect(
      state => ({
          number: state.counter.number,
      }),
      {
          increase,
          decrease,
      },
  )(CounterContainer);
  ```
  -위와 같이 두 번째 파라미터를 아예 객체 형태로 넣어주면 cnnect 함수가 내부적으로 bindeActionCreators 작업을 대신해 준다.

### 리덕스 더 편하게 사용하기
    1. redux-actions
    - 액션 생성 함수를 더 짧은 코드로 작성할 수 있다.
    - 리듀서를 작성할 때도 switch/case 문이 아닌 handleACtions 라는 함수를 사용하여 각 액션마다 업데이트 함수를 설정하는 형식으로 작성해 줄수있다.
    ```
    yarn add redux-actions

    import { createACtion } from 'redux-actions';

    const InCREASE = 'counter/INCREASE';
    const DECREASE = 'counter/DECREASE';

    // 첫번째가 redux-actions 사용
    // 두번째가 기본 액션 생성 함수
    export const increase = createACtion(INCREASE);
    export const decrease = () => ({ type: DECREASE }); 
    ```
    - 액션 생섬 함수에서 파라미터를 필요로 함
    - createAction으로 액션을 만들면 액션에 필요한 추가 데이터는 payload라는 이름을 사용
    - creatrACtion으로 만든 액션 생성 함수는 파라미터로 받아 온 값을 객체 않에 넣을 때 원하는 이름으로 넣는 것이 아니라 action_id, actions_todo 와 같이 actions.payload라는 이름을 공통적으러 넣어 주게됩니다.
    ```
    import { createActions.  HandleActions } from 'redux-actions';

    const todos = handleACtions(
        {
            [CHANGE_INPUT]: (state, actions) => ({...state, input:actions.payload}),
            [INSERT]: (state, acion) => ({
                ...state,
                todos: state.todos.concat(action.payload),
            }),
            [TOGGLE]: (state, actions) => ({
                ...state,
                todo.id === action.payload ? { ...todo, done: !todo.don } : todo,
            )},
        },
        initialState,
    );
    ```
    - 모든 추가 데이터 값을 action.payload 로 사용하기 때문에 나중에 리듀서 코드를 볼 때 햇갈릴 수 있다.
    - 객체 비구조화 할당 문법으로  action 값으 payload이름을 새로 설정해주면 actions payload가 정확히 어떤 값을 의미하는지 알 수있다.
    ```
    const todos = handleACtions(
        {
            [CHANGE_INPUT] : (state, { payload: input}) => ({ ...state, input}),
            [INSERT] : (state, { payload: todo } => ({
                ...state,
                todos: state.todos.concat(todo),
            }),
            [TOGGLE] : (state, { payload: id }) => ({
                ...state,
                todos: state.todos.map(todo =>
                    todos.id === id ? { ...todo, done: !todo.done } : todo,
                ),
            }),
            [REMOVE] : (state, { paylopad: id}) => ({
                ...state,
                todos, state.todos.dilter(todo => todo.id !== id),
            }),
        },
        initialState
    )
    ```
    2. immer
    - 객체의 구조가 복잡해지거나 객체로 이루어진 배열을 다룰 경우, inner를 사용하면 훨씬 편리하게 상태를 관리 할수있다.
    ```
    yarn add immer

    import { creatrAction, handleACtions } from 'redux-actions'
    import produce from 'immer'

    const todos = handleActions(
        {
            [CHANGE_INPUT]: (state, { paylod: input }) =>
                produce(sate, draft => {
                    draft.input = input;
                }),
            [INSERT]: (state, {payload: todo}) =>
                produce(state, draft => {
                    draft.todos.push(todo);
                }),
            [TOGGLE]: (state, { payload: id }) =>
                produce(state, draft => {
                    const todo = draft.todos.find(todo => todo.id === id);
                    todo.done = !todo.done;
                }),
            [REMOVE]: (state, { payload: id }) =>
                produce(state, draft => {
                    const index = draft.todos.findIdex(todo => todo.id === id);
                    draft.todos.splice(index, 1);
                }),
        },
        initialState,
    )
    ```

### Hooks를 사용하여 컨테이너 컴포넌트 만들기
1. useSelectort로 상태 조회하기
    - useSelector Hook을 사용하면 connect 함수를 사용하지 않고도 리덕스의 상태를 조회ㅏㅎㄹ 수 있습니다.
    - const 결과 = useSelector(상태 선택 함수);
    - 상태 선택 함수는 mapStateToProps와 형태가 같다
    ```
    import React from 'react';
    import { useSelector } from 'react-redux';
    import Counter from '../components/Counter';
    import { increase, decrease } from '../modules/counter;

    const CounterContainer = () => {
        const number = useSelector(state => state.counter.number);
        return <Counter number={number} />;
    }

    export default CounterContainer;
    ```

2. useDispatch를 사용하여 액션 디스패치하기
- useDispatch는 내장 함수 dispatch를 사용할 수 있게 해준다.
- 컨포넌트에서 액션을 디스패치해야 한다면 사용
```
const dispatch = useDispatch();
dispatch({ type: 'SAMPLE_ACTION'});

=====================================
import React from 'react';
import { useSelectort, usdDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    return (
        <Counter
            number={number}
            onIcrease={() => dispatch(increase())}
            onDecrease={() => dispatch(decrease())}
        />
    );
};
export default CounterContainer;
```
- 컴포넌트가 리렌더링될 때마다 onIncrease 함수와 onDecrease 함수가 새롭게 만들어지고있다.
- 컴포넌트 성능을 최적화해야 하는 상황이 온다면 useCallback으로 액션을 디스패치하는 함수를 감싸 주는것이 좋다.
```
import React, { useCallback } from 'react';
import { useSelectort, usdDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIcrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    );
};
export default CounterContainer;
```
3. useStore 를 사용하여 리덕스 스토어 사용하기
- useStore Hooks를 사용하면 컴포넌트 내부에서 리덕스 스토어 객체를 직접 사용할 수 있습니다.
- useStore는 컴포넌트에서 정말 어쩌다가 스토어에 직접 접근해야 하는 살ㅇ황에만 사용해야 한다. 거의 흔하지 않다.
```
const store = useStore();
store.dispatch({ type: 'SAMPLE_ACTION'});
store.getState();
```

4. TodosContainer를 Hooks로 전환
```
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, toggle, remove} from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = () => {
    const { input, todos } = useSelector(({ todos }) => ({
        input: todos.input,
        todos: todos.todos
    }));

    const dispatch = useDispatch();
    const onChangeInput = useCallback( input => dispatch(changeInput(input)), [
        disepatch
    ]);
    const onInsert = useCallback( text => dispatch(insert(text)), [dispatch])
    const onToggle = useCallback( id => dispatch(toggle(id)), [dispatch])
    const onRemove = useCallback( id => dispatch(remove(id)), [dispatch])

    return (
        <Todos
            input={input}
            todos={todos}
            onCHangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    )
}
```
- useSelectort를 사용할때 비구조화 할당 문법 사용
- useDispatch를 사용할 때 각 액션을 디스패치하는 함수 작성

5. useActions 유틸 Hook을 만들어 사용하기
- useACtions는 원래 react-redux에 내장된 상태로 릴리즈될 계획이었으니 리덕스 개발 팀에서 꼭 필요하지 않다고 판단하여 제외
- https://react-redux.js.org/next/api/hooks#recipe-useactions 들어가서 그대로 복사하여 사용
```
// lib/useActions.js
import { bindActionsCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export default function useACtions(actions, deps ) {
    const dispatch = useDispatch();
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map(a => bindActionsCreators(a, dispatch)); 
            }
            return bindACtionsCreators(actions, dispatch);
        },
        deps ? [dispatch, ...deps] : deps
    );
}
```
- 위의 코드는 액션 생성 함수를 액션을 디스패치하는 함수로 변환해준다.
```
// containers/TodoContainer.js
...
import useActions from '../lib/useActions';
const TodosContainer = () => {
    const { input, todos } =useSelector(({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }));

    const [onChageInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],
        []
    );
    return(
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        >
    )
}
```
6. connect 함수와의 주요 차이점
    1. connect 함수를 사용하여 컨테이너 컴포넌트를 만들었을 경우, 해당 컨테이너 컴포넌트의 부모 컴포넌트가
    리렌더링될 때 해당 컨테이너 컴포넌트의 props가 바뀌지 않았다면 리렌더링이 장으로 방지되어 성능이 최적화
    2. useSelctor를 사용하여 리덕스 상태를 조회했을 때는 이 최적화 작업이 자동으로 이루어지지 않으므로 성능
    최적화를 위해서 React.memo를 컨테이너 컴포넌트에 사용해 줘야한다.
    ```
    export defualt React.memo(TodoContainer);
    ```