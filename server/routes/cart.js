const router = require('express').Router();
const controller=require('../controllers/mootaz')
router.get('/oneproduct/:id',controller.Oneproduct)
router.get('/image/:id',controller.Images)
router.get('/someproduct/:id',controller.Somecategories)
router.get('/product',controller.Allproduct)
router.get('/getcart/:id',controller.Cart)
router.post('/createcart',controller.Createcart)
router.put('/updatecart/:id',controller.Updatecart)
router.post('/carthasp',controller.Insertcarthasproduct)
router.post('/addwhis',controller.addwhis)
router.get('/allwhis/:id',controller.allwhis)
router.delete('/delwhis',controller.delwhis)
router.get('/carthasp/:id',controller.Productfromcard)
router.delete("/removeproduct/:cartid/:productid",controller.Removeproductfromcart);
router.get('/namegategorie/:id',controller.Namecategorie)

module.exports = router;