const db = require('../database/indesx')
const createProduct = (req, res) => {
    db.Product.create(req.body).then(() => {
        res.json('product created')
    })
        .catch((err) => {
            res.status(500).json(err)
        })
}

const getProductAll = (req, res) => {
    db.Product.findAll()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({ err })
        })
}
const getImageOne = (req, res) => {
    const id = req.params.id
    db.Image.findAll({ where: { product_idproduct: id } })
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(500).json(err)
        })

}

const createImage = (req, res) => {

    const newImage = {
        imageurl: req.body.imageurl,
        product_idproduct: req.params.id
    }
    db.Image.create(newImage).then(() => {
        res.json('imageCreated')
    })
        .catch((err) => {
            res.status(500).json(err)
        })
}

module.exports = {createProduct,getProductAll,getImageOne,createImage}