const router = require('express').Router()
const playController = require('../controllers/playController')
const beerController = require('../controllers/beerController')
const Authentication = require('../middleware/authentication')


router.get('/', beerController.getAll)
router.post('/recommended' , playController.getRecommendBeer)
router.get('/random', beerController.getRandomBeer)

module.exports = router