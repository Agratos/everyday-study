// 모듈 초기화
const initialState = {
    device: null
};

// 리듀서
export default function setDeviceReducer ( state = initialState, action ) {
    switch (action.type) {
        case 'SET_DEVICE':
            return {
                device: action.device
            };
        default:
            return state
    }
}