const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCartItems,
  removeCartItems,
} = require("../Controllers/Cart");
const VerifyAuthentication = require("../Middlewares/VerifyAuthentication");

router.route("/add-to-cart").post(VerifyAuthentication,addToCart);

router.route("/get-cartitems/:id").get(VerifyAuthentication,getCartItems);

router.route("/clear-cartitems").delete(VerifyAuthentication,removeCartItems);

module.exports = router;
