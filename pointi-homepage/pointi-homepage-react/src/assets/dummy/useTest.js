import { useState, useEffect } from 'react';
import axios from 'axios';

const useTest = () => {
    const [response, setResponse] = useState(null);
    useEffect(() => {
        axios.get('/introduce').then((res) => { setResponse(res.data)})
    })
    return response;   
}

export default useTest;