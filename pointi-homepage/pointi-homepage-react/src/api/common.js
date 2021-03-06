import axios from 'axios';


export default {
    get: async (url) => {
        return await axios.get(url);
    },

    getAll : async (menuUrl,footerUrl,mainUrl,companyUrl,technologyUrl,solutionUrl,recruitingUrl) => {
        return await axios
        .all([
            axios.get(menuUrl), 
            axios.get(footerUrl), 
            axios.get(mainUrl), 
            axios.get(companyUrl),
            axios.get(technologyUrl),
            axios.get(solutionUrl),
            axios.get(recruitingUrl)])
        .then(
            axios.spread((menu,footer,main,company,technology,solution,recruiting) => {
                const data = [
                    menu.data, 
                    footer.data, 
                    main.data, 
                    company.data, 
                    technology.data, 
                    solution.data, 
                    recruiting.data]
                return data;
            })
        )
    }
}  