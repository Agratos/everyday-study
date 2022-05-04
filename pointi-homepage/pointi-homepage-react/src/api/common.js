import axios from 'axios';


export default {
    get: async (url) => {
        return await axios.get(url);
    },

    getAll : async (menuUrl,headerUrl,footerUrl,mainUrl,introduceUrl,technologyUrl,solutionUrl,careerUrl) => {
        return await axios
        .all([
            axios.get(menuUrl), 
            axios.get(headerUrl), 
            axios.get(footerUrl), 
            axios.get(mainUrl), 
            axios.get(introduceUrl),
            axios.get(technologyUrl),
            axios.get(solutionUrl),
            axios.get(careerUrl)])
        .then(
            axios.spread((menu,header,footer,main,introduce,technology,solution,career) => {
                const data = [
                    menu.data, 
                    header.data, 
                    footer.data, 
                    main.data, 
                    introduce.data, 
                    technology.data, 
                    solution.data, 
                    career.data]
                return data;
            })
        )
    }
}  