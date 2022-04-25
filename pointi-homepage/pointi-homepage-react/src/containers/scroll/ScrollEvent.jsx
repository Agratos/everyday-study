import React, { useEffect, useState} from 'react';

const ScrollEvent = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener(`scroll`, handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if(window.scrollY >= 50){
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    return scroll;
}

export default ScrollEvent;