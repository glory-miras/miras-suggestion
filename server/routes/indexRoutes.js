const express = require('express')
const router = express.Router()
const signInRoutes = require('./signInRoutes')

router.get('/',function(req,res){

    res.send("ini saya")
})

router.use('/signin', signInRoutes)





module.exports = router