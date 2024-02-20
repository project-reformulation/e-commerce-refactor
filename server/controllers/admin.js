const db=require('../database/indesx')

const createCategory=(req,res)=>{
    const data=req.body
    db.Category.create(data).then(()=>{
        res.json('category created')
    })
    .catch((err)=>{
        res.satatus(500).json(err)
    })
}

const getAllCategory=(req,res)=>{
    db.Category.findAll().then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.satatus(500).json(err)
    })
}

const updateCategory=(req,res)=>{
    const id=req.params.id
    const data=req.body
    db.Category.update(data,{where:{idcategory:id}}).then(()=>{
        res.json('category updated')
    })
    .catch((err)=>{
        res.satatus(500).json(err)
    })
}

const deleteCategory=(req,res)=>{
    const id=req.params.id
    db.Category.destroy({where:{idcategory:id}}).then(()=>{
        res.json('category deleted')
    })
    .catch((err)=>{
        res.json(err)
    })
}

const EditRole=(req,res)=>{
    const id=req.params.id
    const data=req.body
    db.User.update(data,{where:{iduser:id}}).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
}
const getAllProducthaveCategory=(req,res)=>{
    const id=req.params.id
    db.Product.findAll({where:{category_idcategory:id} }).then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports={createCategory,getAllCategory,updateCategory,deleteCategory,EditRole,getAllProducthaveCategory}