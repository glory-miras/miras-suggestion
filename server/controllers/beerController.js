const Beer = require('../models/beer')
const beerParser = require('../helpers/beerParserData')

class BeerController {
    static getAll(req,res){
        Beer.getAll()
        .then(({data}) => {
            let beers = [];
            data.forEach(el => { beers.push(beerParser(el))})
            res.json(beers)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static getById(req,res){
        const { id } = req.params
        // const id = 4;
        Beer.getById(id)
        .then(({data}) => {
            let beers = [];
            data.forEach(el => { beers.push(beerParser(el))})
            res.json(beers)
            // console.log(beers)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = BeerController
// BeerController.getById(3)