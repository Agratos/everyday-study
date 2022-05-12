// 모듈 초기화
const initialState = {
    isPc: null,
    isMobile: null,
};

// 리듀서
export default function setDeviceReducer ( state = initialState, action ) {
    switch (action.type) {
        case 'SET_DEVICE':
            return {
                isPc: action.isPc,
                isMobile: action.isMobile
            };
        default:
            return state
    }
}