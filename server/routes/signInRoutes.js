const express = require('express')
const router = express.Router()
const SignInController = require('../controllers/signInController')

router.post('/', SignInController.signIn);


module.exports = router