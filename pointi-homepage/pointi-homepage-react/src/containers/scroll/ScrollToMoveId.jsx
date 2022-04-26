import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";

const ScrollToMoveId = () => {
    const [currnetUrl, setCurrentUrl] = useState('');
    let { id } = useParams();
    let aftertUrl = window.location.href.split('/')[3];

    useEffect(() => {
        id !== undefined ? document.getElementById(id).scrollIntoView({behavior:'smooth'}) 
        : aftertUrl === `` ? window.scroll(0,0)
        : currnetUrl === aftertUrl ? window.scroll({top: 0, left: 0, behavior:'smooth'})
        : window.scroll(0,0)
        setCurrentUrl(aftertUrl);
    },[id])  
}

export default ScrollToMoveId;