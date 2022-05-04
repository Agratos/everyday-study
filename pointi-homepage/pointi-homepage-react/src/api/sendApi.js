import api from './common';

export default {
    getMenu : () => {
        return api.get('/menu')
    },
    getHeader : () => {
        return api.get('/menu/header');
    },
    getFooter : () => {
        return api.get('/menu/footer');
    },
    getMain : () => {
        return api.get('/main');
    },
    getIntroduce : () => {
        return api.get('/introduce')
    }, 
    getTechnology : () => {
        return api.get('/technology');
    }, 
    getSolution : () => {
        return api.get('/solution');
    },
    getCareer : () => {
        return api.get('/career');
    },
}  