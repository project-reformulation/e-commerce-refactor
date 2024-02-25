const express = require("express");
const router = express.Router();
const { add } = require("../controllers/payment.js");
const { verify } = require("../controllers/payment.js");

router.post("/pay", add);
router.post("/pay/:id", verify);

module.exports = router;