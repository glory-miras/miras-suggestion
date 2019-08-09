const Sentiment = require('../models/sentiment')
const Beer = require('../models/beer')
const countABV = require('../helpers/getRecommendedABV')
const beerParserData = require('../helpers/beerParserData')

class PlayController{
    static getRecommendBeer(req,res){
        let emotion = null
        const {text} = req.body
        Sentiment.checkSentiment(text)
        .then(data => {
            data = JSON.parse(data)
            let obj = data.emotion
            let emotionCount = Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
            emotion = data.emotion
            let abv = countABV(emotionCount)
            return Beer.getBeerWithAbv(abv)
        })
        .then(({data}) => {
            let beers = [];
            for (let i=0; i<data.length; i++){
                beers.push(beerParserData(data[i]))
            }
            res.json({emotion, beers})
        })
        .catch(next)
    }
}

module.exports = PlayController