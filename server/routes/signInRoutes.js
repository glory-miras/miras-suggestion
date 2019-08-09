const User = require('../models/User')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const secret = process.env.JWT_SECRET
const jwt = require('jsonwebtoken');
const express = require('express')
const router = express.Router()

router.post('/', function(req, res, next) {

    client
      .verifyIdToken({
        idToken: req.body.idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      })
      .then(function(ticket) {
        
        const { email} = ticket.getPayload();
        
        // console.log(email)
        
        User.findOne({email})
        .then(user =>{
            if (!user){
                return User.create({
                    'email' : email,
                    'password' :"tidak_semudah_itu"
                })
            }
            else {
                return user
            }
        })
        .then(user =>{
            let userdata = {
                '_id' : user._id,
                email: user.email
            }
            let token = jwt.sign(userdata,secret)
            res.json(token)
        })
        .catch(next)
      })
      .catch(next);
  });


  module.exports = router