const express = require('express')
const app = express()
const cors = require("cors")
const port = 3000
const axios = require('axios')
app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())
const beerRoute = require('./routes/beerRoute')



app.use('/beers',beerRoute)

app.listen(port,function(){
    console.log('LISTEN TO PORT '+port)
})