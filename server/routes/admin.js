const router = require('express').Router();
const controllers=require('../controllers/admin')
router.post('/createCategory',controllers.createCategory)
router.get('/getAllCategory',controllers.getAllCategory)
router.put('/updateCategory/:id',controllers.updateCategory)
router.delete('/deleteCategory/:id',controllers.deleteCategory)
router.put('/EditRole/:id',controllers.EditRole)
router.get('/ProductInThatCategory/:id',controllers.getAllProducthaveCategory)


module.exports = router;