const router = require('express').Router()
const playController = require('../controllers/playController')
const beerController = require('../controllers/beerController')

router.get('/', beerController.getAll)
// router.get('/',beerController.getById)
router.post('/recommended',playController.getRecommendBeer)
router.get('/random',beerController.getRandomBeer)

module.exports = router