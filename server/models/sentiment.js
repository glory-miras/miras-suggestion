if (!process.env.NODE_ENV || process.end.NODE_ENV == "development"){
    require('dotenv').config()
}
const pd = require('paralleldots');
pd.apiKey = "l1zr7HFih7SFqo4SUdjGeQxzaTqwBOmftHma5sEnANk"

class Sentiment {
    static checkSentiment(text){
        console.log(text)
        return pd.emotion(text,'en')
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(err => { 
        //     console.log(err)
        // })
    }
}

module.exports = Sentiment