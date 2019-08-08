const Sentiment = require('../models/sentiment')
const Beer = require('../models/beer')

class PlayController{
    static getRecommendBeer(req,res){
        const text = "Shut up"
        Sentiment.checkSentiment(text)
        .then(data => {
            data = JSON.parse(data)
            let {positive , neutral , negative} = data.sentiment
            
            console.log({positive , neutral , negative})
        })
        .catch(err => {
            console.log(err)
        })
    }
}

PlayController.getRecommendBeer()