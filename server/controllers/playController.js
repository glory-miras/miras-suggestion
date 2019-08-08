const Sentiment = require('../models/sentiment')
const Beer = require('../models/beer')
const countABV = require('../helpers/getRecommendedABV')
const beerParserData = require('../helpers/beerParserData')
class PlayController{
    static getRecommendBeer(req,res){
        const {text} = req.body
        // const text = 'snow is good but daenery more than him'
        Sentiment.checkSentiment(text)
        .then(data => {
            data = JSON.parse(data)
            let obj = data.emotion
            let emotion = Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
            let abv = countABV(emotion)
            return Beer.getBeerWithAbv(abv)
        })
        .then(({data}) => {
            let beers = [];
            for (let i=0; i<data.length; i++){
                // console.log(beerParserData(data[i]))
                beers.push(beerParserData(data[i]))
            }
            res.JSON(beers)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = PlayController