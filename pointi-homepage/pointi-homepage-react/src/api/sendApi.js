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
    getCompany : () => {
        return api.get('/company')
    }, 
    getTechnology : () => {
        return api.get('/technology');
    }, 
    getSolution : () => {
        return api.get('/solution');
    },
    getRecruiting : () => {
        return api.get('/recruiting');
    },
    getAll : () => {
        return api.getAll('/menu','/menu/header','/menu/footer', '/main', '/company','/technology','/solution','/recruiting');
    }
}  