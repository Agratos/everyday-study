import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';

import sendApi from 'api/sendApi';

const BeforeRendering = () => {
    const dispatch = useDispatch();
    const isPc = useMediaQuery({ query: '(min-width: 1200px)' })
    const isTablet = useMediaQuery({ query: '(min-width:500px) and (max-width: 1200px)'})
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
    const device = (isPc && 'PC') || (isTablet && 'Tablet') || (isMobile && 'Mobile') || 'PC';

    useEffect(() => {
        sendApi.getAll().then(response => {
        dispatch({
            type: 'SET_DATA',
            menu: response[0],
            header: response[1],
            footer: response[2],
            main: response[3],
            introduce: response[4],
            technology: response[5],
            solution: response[6],
            career: response[7],
        })
        })
    },[])
    useEffect(() => {
        dispatch({
        type: 'SET_DEVICE',
        device: device,
        })
    }, [device])
}

export default BeforeRendering;