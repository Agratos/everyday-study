import axios from 'axios';


export default {
    get: async (url) => {
        return await axios.get(url);
    }
}  