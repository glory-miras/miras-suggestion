const Beer = require('../models/beer')
const AdviceSlip = require('../models/adviceSlip')
const beerParser = require('../helpers/beerParserData')

class BeerController {
    static getAll(req,res){
        if (req.query.id){
            let beers = [];
            const { id } = req.query
            Beer.getById(id)
            .then(({data}) => {
                data.forEach(el => { beers.push(beerParser(el))})
                return AdviceSlip.randomAdvice()
            })
            .then(({data}) => {
                res.json({data, beers})
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