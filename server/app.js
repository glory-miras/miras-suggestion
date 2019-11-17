require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000
const indexRoutes = require('./routes/indexRoutes')
const mongoose = require('mongoose');
const erroHandler = require('./middleware/errorHandler')
const beerRoute = require('./routes/beerRoute')


mongoose.connect('mongodb://localhost/mirasApp', {useNewUrlParser : true})
.then(()=>{})
.catch(err=>{
console.log(err))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/', indexRoutes)
app.use('/beers',beerRoute)
app.use(erroHandler)

app.listen(port)
