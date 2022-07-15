import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';

import sendApi from 'api/sendApi';

const BeforeRendering = () => {
    const dispatch = useDispatch();
    const isPc = useMediaQuery({ query: '(min-width: 1120px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 670px) and (max-width: 1120px)'})
    const isMobile = useMediaQuery({ query: '(max-width: 670px)' })
    const device = (isPc && 'PC') || (isTablet && 'Tablet') || (isMobile && 'Mobile') || 'PC';

    useEffect(() => {
        sendApi.getAll().then(response => {
        dispatch({
            type: 'SET_DATA',
            menu: response[0],
            footer: response[1],
            main: response[2],
            company: response[3],
            technology: response[4],
            solution: response[5],
            recruiting: response[6],
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