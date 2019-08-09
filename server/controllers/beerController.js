const Beer = require('../models/beer')
const beerParser = require('../helpers/beerParserData')

class BeerController {
    static getAll(req,res){
        if (req.query.id){
            const { id } = req.query
            Beer.getById(id)
            .then(({data}) => {
                let beers = [];
                data.forEach(el => { beers.push(beerParser(el))})
                res.json(beers)
            })
            .catch(err => {
                res.send(err)
            })
        } else {
            return Beer.getAll()
            .then(({data}) => {
                let beers = [];
                data.forEach(el => { beers.push(beerParser(el))})
                res.json(beers)
            })
            .catch(err => {
                res.send(err)
            })
        }
       
       
    }

    static getRandomBeer(req,res){
        Beer.getRandomBeer()
        .then(({data}) => {
            let beers = [];
            data.forEach(el => { beers.push(beerParser(el))})
            res.json(beers)
        })
        .catch(err => {
            res.send(err)
        })
    }


    
}

module.exports = BeerController