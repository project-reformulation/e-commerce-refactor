const db = require("../database/indesx");

const Oneproduct = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await db.Product.findAll({
      where: {
        idproduct: id,
      },
    });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
const Somecategories = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await db.Product.findAll({
      where: {
        category_idcategory: id,
      },
    });
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
const Images = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.Image.findAll({
      where: {
        product_idproduct: id,
      },
    });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
const Allproduct = async (req, res) => {
  try {
    const result = await db.Product.findAll({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
const Cart = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.Cart.findAll({
      where: {
        user_iduser: id,
        status:"encours",
      },
    });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
const Createcart = async (req, res) => {
  const dataa = req.body;
  await db.Cart.create(dataa)
    .then((result) => {
      res.send(result); // Sending the result directly
    })
    .catch((err) => {
      console.log(err);
    });
};

const Updatecart = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  await db.Cart.update(data, {
    where: {
      idcart: id,
      status: "encours",
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const Insertcarthasproduct = async (req, res) => {
  const data = req.body;
  const d = await db.CartHasProduct.create(data)
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const Productfromcard = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.CartHasProduct.findAll({
      where: {
        cart_idcart: id,
      },
    });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
const Removeproductfromcart=async(req,res)=>{
    const { cartid, productid } = req.params;
    await db.CartHasProduct.destroy({
        where:{
            cart_idcart:cartid,
            product_idproduct:productid
            }
        })
    .then((result)=>{
        res.send(result)}).catch((err)=>{
            console.log(err)
        })
}
const Namecategorie = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.Category.findAll({
      where: {
        idcategory: id,
      },
    });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
const addwhis = async (req, res) => {
  const data = req.body;
  const d = await db.Whislist.create(data)
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
const delwhis = async (req, res) => {
  const data = req.body;
  const d = await await db.Whislist.destroy({
    where: {
      user_iduser: data.user_iduser,
      product_idproduct: data.product_idproduct
    }
  })
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
const allwhis = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.Whislist.findAll({
      where: {
        user_iduser: id,
      },
    });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  Oneproduct,
  Somecategories,
  Images,
  Allproduct,
  Cart,
  Createcart,
  Updatecart,
  Productfromcard,
  Insertcarthasproduct,
  Removeproductfromcart,
  Namecategorie,
  addwhis,
  delwhis,
  allwhis
};
