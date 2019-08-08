const axios = require('axios')

class Beer {
    static getAll(){
        return axios.get('https://api.punkapi.com/v2/beers')
        // .then(data => { console.log(data)})
        // .catch(err => {
        //     console.log(err)
        // })
    }
    
    static getById(id){
        return axios.get(`https://api.punkapi.com/v2/beers/${id}`)
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }

    static getRandomBeer(){
        return axios.get(` https://api.punkapi.com/v2/beers/random `)
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }

    static getPaginationBeer(page,dataPerPage){
        return axios.get(` https://api.punkapi.com/v2/beers?page=${page}&per_page=${dataPerPage}`)
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }

    static getBeerWithAbv(abv){
       return axios.get(`https://api.punkapi.com/v2/beers?abv_lt=${abv}`)
    }
}


module.exports = Beer