const axios = require('axios')

class Beer {
    static getAll(){
        return axios.get('https://api.punkapi.com/v2/beers')
    }
    
    static getById(id){
        return axios.get(`https://api.punkapi.com/v2/beers/${id}`)
    }

    static getRandomBeer(){
        return axios.get(` https://api.punkapi.com/v2/beers/random `)
    }

    static getPaginationBeer(page,dataPerPage){
        return axios.get(` https://api.punkapi.com/v2/beers?page=${page}&per_page=${dataPerPage}`)
    }

    static getBeerWithAbv(abv){
       return axios.get(`https://api.punkapi.com/v2/beers?abv_lt=${abv}`)
    }
}


module.exports = Beer