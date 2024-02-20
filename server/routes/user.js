const router = require('express').Router();
const user =require("../controllers/user")
router.post('/createProduct2',user.createProduct)
router.get('/allprodect',user.getProductAll)
router.get('/imagesof',user.getImageOne)
router.post('/createImage/:id',user.createImage)


module.exports = router;