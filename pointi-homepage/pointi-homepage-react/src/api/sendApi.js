import api from './common';

export default {
    getFooter : () => {
        return api.get('/menu/footer');
    } 
}  