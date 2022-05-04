// 모듈 초기화
const initialState = {
    menu: null,
    header: null,
    footer: null,
    main: null,
    introduce: null,
    technology: null,
    solution: null,
    career: null,
    isLoading: true,
};

// 리듀서
export default function setDataReducer ( state = initialState, action ) {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                menu: action.menu,
                header: action.header,
                footer: action.footer,
                main: action.main,
                introduce: action.introduce,
                technology: action.technology,
                solution: action.solution,
                career: action.career,
                isLoading: false,
            };
        default:
            return state
    }
}