const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const{authentication,authorization} = require("../middlewares/auth");
const productController = require("../controllers/productController")

router.post("/register",userController.createUser)
router.post("/login",userController.login)

router.get("/user/:userId/profile",userController.getUser)

router.put("/user/:userId/profile",authentication,authorization,userController.updateUser)



//--------------------for products--------------------

router.post("/products", productController.createProduct)

router.get("/products", productController.getProduct)

router.get("/products/:productId", productController.getProductById)

router.put('/products/:productId',productController.updateProduct);

router.delete('/products/:productId', productController.deleteProduct)
  
// -------------------- for cart-------------------------

router.post('/users/:userId/cart', authentication, createCart);

router.put('/users/:userId/cart', authentication, updateCart);

router.get('/users/:userId/cart', authentication, getCart);

router.delete('/users/:userId/cart', authentication, deleteCart)

//Error Handing
router.all('/*', (req, res) => {
    res.status(404).send({ status: false, message: "URL Not Found" })
})







module.exports = router