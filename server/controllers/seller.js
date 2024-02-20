const db = require('../database/indesx')


const createProduct = (req, res) => {
    db.Product.create(req.body).then(() => {
        res.json('product created')
    })
        .catch((err) => {
            res.status(500).json(err)
        })
}



const getProduct = (req, res) => {
    db.Product.findAll()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({ err })
        })
}

const updateProduct = (req, res) => {
    const id = req.params.id
    const newData = req.body
    db.Product.update(newData, { where: { idproduct: id } })
        .then(() => {
            res.json('product updated')
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

const deleteProduct = (req, res) => {
    const id = req.params.id
    db.Product.destroy({ where: { idproduct: id } })
        .then(() => {
            res.json('productDelted')
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

const manageStock = (req, res) => {
    const id = req.params.id
    const updateStock = req.body.quantityp
    db.Product.update({ quantityp: updateStock }, { where: { idproduct: id } })
        .then(() => {
            res.json('updatedStock')
        })
        .catch((err) => {
            res.status.json(err)
        })
}
const managePrice = (req, res) => {
    const id = req.params.id
    const updateprice = req.body.pricep
    db.Product.update({ pricep: updateprice }, { where: { idproduct: id } })
        .then(() => {
            res.json('updatedPrice')
        })
        .catch((err) => {
            res.status.json(err)
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
const getImages = (req, res) => {
    const id = req.params.id
    db.Image.findAll({ where: { product_idproduct: id } })
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(500).json(err)
        })

}
const deleteImage = (req, res) => {
    const idProduct = req.params.idProduct
    const idImage = req.params.idImage
    db.Image.destroy({ where: { product_idproduct: idProduct, idimage: idImage } })
        .then(() => {
            res.json('deleted image')
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}
const updateImage = (req, res) => {
    const idProduct = req.params.idProduct
    const idImage = req.params.idImage
    const data = req.body
    db.Image.update(data, { where: { product_idproduct: idProduct, idimage: idImage } })
        .then(() => {
            res.json('updated image')
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}
const getCategoryByname = (req, res) => {
    const name = req.params.name
    db.Category.findAll({ where: { name: name } }).then((data) => {
        res.json(data)
    })
}

const getCategoryById=(req,res)=>{
    const id=req.params.id
    db.Category.findAll({where:{idcategory:id}}).then((data)=>{
        res.json(data)
    })
}
const AddProductWithImages = (req, res) => {
    const listURL = req.body.listURL
    const namep = req.body.namep
    const descriptionp = req.body.descriptionp
    const sizep = req.body.sizep
    const categoryp = req.body.categoryp
    const quantityp = req.body.quantityp
    const pricep = req.body.pricep
    const promop = req.body.promop
    console.log(listURL);
    db.Product.create({ namep: namep, descriptionp: descriptionp, sizep: sizep, categoryp: categoryp, quantityp: quantityp, pricep: pricep, promop: promop, images: listURL}, {
        include: [ db.Image ]
      })
        .then((data) => {
            res.json(data)
        })

        .catch((err) => { 
            console.log(err);
            res.json('err') })

}
module.exports = { createProduct, getProduct, updateProduct, deleteProduct, manageStock, managePrice, createImage, getImages, deleteImage, updateImage, getCategoryByname, AddProductWithImages ,getCategoryById}