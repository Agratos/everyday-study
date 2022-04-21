import { useParams } from "react-router-dom";
import { useEffect } from "react";

const useLinkToId = () => {
    let { id } = useParams();
    useEffect(() => {
        document.getElementById(id).scrollIntoView(); 
    },[id])  
}

export default useLinkToId;