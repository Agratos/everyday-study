```
import { useEffect, useState } from 'react';

export const useCount = (start: number, end: number, interval: number, gap: number, increase: string) => {
    const [count, setCount] = useState(start);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if(increase === '+'){
                if(count < end) setCount(count => count + gap)
            } else {
                if(count > end) setCount(count => count - gap)
            }
        }, interval)
        return () => clearTimeout(timeout);
    },)

    return count;
};
```
 - 내가 처음으로 만든 코드.....
 - 숫자를 자동으로 카운트 해준다.
 - 변수는 시작, 끝, 시간 초 간격, 건너뛰는 단위, 증가 방향 을 받는다.
