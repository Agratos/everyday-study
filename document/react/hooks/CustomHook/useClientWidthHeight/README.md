```
import { useEffect, useState, RefObject } from "react";

export const useClientWidthHeight = (ref: RefObject<HTMLElement>) => {
    const [ width, setWidth ] = useState<number>(0);
    const [ height, setHeight ] = useState<number>(0);

    useEffect(() => {
        const setClientWidthHeight = () => {
            if(ref.current){
                setWidth(ref.current.clientWidth);
                setHeight(ref.current.clientHeight);
            }
        };
        setClientWidthHeight();

        window.addEventListener('resize', setClientWidthHeight);

        return () => {
            window.removeEventListener('resize', setClientWidthHeight);
        };
    }, []);

    const clientRects = { width, height};

    return clientRects;
}
```
 - user의 화면 크기를 가져오는 코드