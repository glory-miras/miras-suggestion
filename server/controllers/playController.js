const Sentiment = require('../models/sentiment')
const Beer = require('../models/beer')

class PlayController{
    static getRecommendBeer(req,res){
        const {text} = req.body
        Sentiment.checkSentiment(text)
        .then(data => {
            data = JSON.parse(data)
            console.log(data)
            // let {positive , neutral , negative} = data.sentiment
            
            // console.log({positive , neutral , negative})
        })
        .catch(err => {
            console.log(err)
        })
    }
}

PlayController.getRecommendBeer()