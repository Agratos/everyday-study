import { createStore } from "redux";

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션 이름은 문자열 형태로 주로 대문자로 작성하며 액션이름은 고유해야 합니다.
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수를 작성
// 액션 객체는 type 값을 반드시 갖고 있어야 하며 그외에 추후 상태를 업데이트할 때 참고하고 싶은 값은 마음대로 넣을 수 있다.
const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = (number) => ({type: INCREASE, number});
const decrease = () => ({type: DECREASE});

//초깃값 설정
const initialState = {
    toggle: false,
    counter: 0
};

//리듀서 함수 정의 함수의 파라미터로는 state와 acion값을 가져온다
function reducer(state = initialState, action) {
    //action.type에 따라 다른 작업을 처리함
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성 유지를 해줘야 한다.
                toggle: !state.toggle
            };
        case INCREASE:
            console.log(action)
            return {
                ...state,
                counter: state.counter + action.number
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter -1
            };
        default:
            return state;
    }
}

// 스토어 만들기
const store = createStore(reducer);

const render = () => {
    const state = store.getState(); // 현재 상태를 불러옵니다.

    // 토글 처리
    if(state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }

    // 카운터 처리
    counter.innerText = state.counter;
};

render();
store.subscribe(render);

//디스패치를 할 때는 스토어의 내장 함수 dispatch를 사용합니다.

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(4));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
}