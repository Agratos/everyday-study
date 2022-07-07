// 액션 타입
export const SET_DATA = 'data/SET_DATA';

// 액션
export const setData = (data) => {
    return {
        type: SET_DATA,
        data
    };
}

// 리듀서 초기화
const initialState = {
    menu: null,
    header: null,
    footer: null,
    main: null,
    company: null,
    technology: null,
    solution: null,
    recruiting: null,
    isLoading: true,
};

export default function setDataReducer ( state = initialState, action ) {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                menu: action.menu,
                header: action.header,
                footer: action.footer,
                main: action.main,
                company: action.company,
                technology: action.technology,
                solution: action.solution,
                recruiting: action.recruiting,
                isLoading: false,
            };
        default:
            return state
    }
}