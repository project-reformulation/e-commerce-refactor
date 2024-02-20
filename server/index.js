const express = require("express");
const router = require('./routes/routes')
const auth = require('./routes/auth')
const admin = require('./routes/admin')
const seller = require('./routes/seller')
const user = require('./routes/user')
const cart = require('./routes/cart')
const wishList = require('./routes/wishList')


const app = express();
const PORT = process.env.PORT || 8000
const cors=require('cors')


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));


app.use("/", router);
app.use("/auth",auth)
app.use("/admin",admin)
app.use("/seller",seller)
app.use("/user",user)
app.use("/cart",cart)
app.use("/wishList",wishList)


app.listen(PORT, function () {
  console.log("listening on port 8000!");
});