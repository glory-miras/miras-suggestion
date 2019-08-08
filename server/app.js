const express = require('express')
const app = express()
const cors = require("cors")
const port = 3000
const axios = require('axios')
app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())
const sentiment = require('./models/sentiment')

app.post('/sentiment',(req,res) => {
    let input = {}
        input.text = "SUCK";
        input.api_key = "l1zr7HFih7SFqo4SUdjGeQxzaTqwBOmftHma5sEnANk"
        console.log(input)
    axios.post('https://apis.paralleldots.com/v4/sentiment',input)
    .then((data) => {
        res.send(data)
    })
    .catch(err => {
        res.send(err)
    })
})

app.listen(port,function(){
    console.log('LISTEN TO PORT '+port)
})