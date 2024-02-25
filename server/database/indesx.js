const {DataTypes, Sequelize} = require('sequelize')
const mysql = require('mysql2')


const sequelize = new Sequelize('ecommerce', 'root', 'choclata', {




    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate()
.then(()=>{
    console.log("connection has been successfully established");
})
.catch((err)=>{
    console.log(err);
})


const User = sequelize.define('user', {
    iduser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING(45),
    lastname: DataTypes.STRING(45),
    email: DataTypes.STRING(45),
    password: DataTypes.STRING(225),
    image: DataTypes.TEXT,
    role: DataTypes.STRING(45)
  }, {
    timestamps: false
  });
  

  const Product = sequelize.define('product', {
    idproduct: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    namep: DataTypes.STRING(45),
    descriptionp: DataTypes.TEXT,
    sizep: DataTypes.STRING(45),
    quantityp: DataTypes.INTEGER,
    ratingp: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    pricep: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    promop: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    timestamps: false
  });
  

  const Image = sequelize.define('image', {
    idimage: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    imageurl: DataTypes.TEXT
  }, {
    timestamps: false
  });
  const Email = sequelize.define('Email', {
    to: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});
  
  const Whislist = sequelize.define('whislist', {
    idwhislist: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  },{
    timestamps: false
  });
  
  
  const Paiement = sequelize.define('paiement', {
    idpaiement: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
  
 
  const Cart = sequelize.define('cart', {
    idcart: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: DataTypes.STRING(45), 
    quantity: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  const Category = sequelize.define('category',{
    idcategory:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name:DataTypes.STRING(45)
  }, {
    timestamps: false
  })
  


  User.hasMany(Product, { foreignKey: 'user_iduser' ,onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  Product.belongsTo(User, { foreignKey: 'user_iduser' });
  
  Product.hasMany(Image, { foreignKey: 'product_idproduct' ,onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  Image.belongsTo(Product, { foreignKey: 'product_idproduct' });
  
  User.hasMany(Whislist, { foreignKey: 'user_iduser',onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Whislist.belongsTo(User, { foreignKey: 'user_iduser' });

  Product.hasMany(Whislist, { foreignKey: 'product_idproduct',onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Whislist.belongsTo(Product, { foreignKey: 'product_idproduct' });
  
  User.hasMany(Paiement, { foreignKey: 'user_iduser',onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Paiement.belongsTo(User, { foreignKey: 'user_iduser' });
  
  User.hasMany(Cart, { foreignKey: 'user_iduser',onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Cart.belongsTo(User, { foreignKey: 'user_iduser' });
  
  Product.hasMany(Cart, { foreignKey: 'product_idproduct',onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  Cart.belongsTo(Product, { foreignKey: 'product_idproduct' });

  Category.hasMany(Product,{foreignKey:'category_idcategory',onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  Product.belongsTo(Category,{foreignKey:'category_idcategory'})
  
  sequelize.sync({ alter: true }).then(() => {
    console.log('All is good.');
  }).catch(err => {
    console.error('err :', err);
  });
  
  module.exports = { User, Product, Image, Whislist, Paiement, Cart,Category };

