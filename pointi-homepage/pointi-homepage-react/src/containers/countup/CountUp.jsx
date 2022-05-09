import React, { useState, useEffect, useRef } from 'react';

// 메인 페이지 숫자 증가 애니메이션
const CountUp = ({ end, start = 0 , timer = 50}) => {
    const [state, setState] = useState(null);
    const ref = useRef(start);

    const accumulator = end / 200;

    const updataeCounterState = () => {
        if(ref.current < end) {
            const result = Math.ceil(ref.current + accumulator);
            if(result > end) return setState(end);
            setState(result);
            ref.current = result;
        }
        setTimeout(updataeCounterState, timer);
    }

    useEffect(() => {
        let isMounted = true;
        if(isMounted) {
            updataeCounterState()
        }

        return() => (isMounted = false);
    }, [end , start]);

    return (
        <div>{state}</div>
    )
}

export default CountUp;