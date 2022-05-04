// 모듈 초기화
const initialState = {
    menu: null,
    header: null,
    footer: null,
    introduce: null,
    isLoading: true,
};

// 리듀서
export default function setDataReducer ( state = initialState, action ) {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                menu: action.data,
                isLoading: false,
            };
        default:
            return state
    }
}