// 액션 타입
export const SET_CHANGE = 'change/SET_CHANGE';

// 액션
export const setData = (change) => {
    return {
        type: SET_CHANGE,
        change
    };
}

// 리듀서 초기화
const initialState = {
    isChange: null,
};

export default function setChangeReducer ( state = initialState, action ) {
    switch (action.type) {
        case 'SET_CHANGE':
            return {
                isChange: action.isChange,
            };
        default:
            return state
    }
}