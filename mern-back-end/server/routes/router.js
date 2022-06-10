const express = require("express");
const router = express.Router();
const userController = require("../controller/buyer");
const adminController = require("../controller/admin");
const categoryController = require("../controller/category");
const productController = require("../controller/product");
const cartController = require("../controller/cart");
const dataController = require("../controller/initialData");
const addressController = require("../controller/address");
const orderController = require("../controller/order");
const updateOrderController = require("../controller/orderAdmin");

const pageController = require("../controller/page");
const {
  requireSignin,
  buyerMiddleware,
  adminMiddleware,
} = require("../middleware");
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");
// const upload = require("../middleware/multerMiddleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

////////////////////////////////////////////////////////////////////////////////////////////////////
//const { validateRequest, isRequestValidated } = require('../validators/buyer')

//Buyer signinup & login
//router.post('/buyer/signin', validateRequest, isRequestValidated, userController.signin);
router.post("/buyer/signin", userController.signin);
router.post("/buyer/signup", userController.signup);

//Admin signinup & login
router.post("/admin/signin", adminController.signin);
router.post("/admin/signup", adminController.signup);
router.post("/admin/signout", adminController.signout);

//category
router.post(
  "/category",
  requireSignin,
  adminMiddleware,
  upload.single("categoryImage"),
  categoryController.create
);
//find
router.get(
  "/categories",
  requireSignin,
  adminMiddleware,
  categoryController.find
);
//find by id
router.get(
  "/category/:id",
  requireSignin,
  adminMiddleware,
  categoryController.find
);
//update category
router.post(
  "/category/update",
  upload.array("categoryImage"),
  categoryController.updateCategories
);
//delete category
router.post("/category/delete", categoryController.deleteCategories);

//~~~~~~~~~~~~~Buyer View~~~~~~~~~~~~~~~~~~~~~//
router.get("/categoriess", categoryController.findAsBuyer);

//Add Product
router.post(
  "/product",
  requireSignin,
  adminMiddleware,
  upload.array("productPicture"),
  productController.create
);
//View All product
router.get("/product", requireSignin, adminMiddleware, productController.find);
//fetch products
router.get("/products/:slug", productController.getProductsBySlug);

//create cart
router.post("/cart", requireSignin, buyerMiddleware, cartController.create);
//get cart
router.post(
  "/getCartItems",
  requireSignin,
  buyerMiddleware,
  cartController.getCartItems
);
//remove cart items
router.post(
  "/user/cart/removeItem",
  requireSignin,
  buyerMiddleware,
  cartController.removeCartItems
);
//getCartItems
router.post(
  "/user/getCartItems",
  requireSignin,
  buyerMiddleware,
  cartController.getCartItems
);

//initial Data
router.post(
  "/initialdata",
  requireSignin,
  adminMiddleware,
  dataController.initialdata
);

//pages
router.post(
  "/page/create",
  requireSignin,
  adminMiddleware,
  upload.fields([{ name: "banners" }, { name: "products" }]),
  pageController.createPage
);
//get Pages
router.get("/page/:category/:type", pageController.getPage);

//Product Details
router.get("/product/:productId", productController.getProductDetailsById);

//getProducts
router.post(
  "/product/getProducts",
  requireSignin,
  adminMiddleware,
  productController.getProducts
);
//Delete Products
router.delete(
  "/product/deleteProductById",
  requireSignin,
  adminMiddleware,
  productController.deleteProductById
);

//adding address to shipping,Billing
router.post(
  "/buyer/addAddress",
  requireSignin,
  buyerMiddleware,
  addressController.addAddress
);
//get Address
router.post(
  "/buyer/getAddress",
  requireSignin,
  buyerMiddleware,
  addressController.getAddress
);

//order
router.post(
  "/addOrder",
  requireSignin,
  buyerMiddleware,
  orderController.addOrder
);
router.get(
  "/getOrders",
  requireSignin,
  buyerMiddleware,
  orderController.getOrders
);
//get One order details
router.post(
  "/getOrder",
  requireSignin,
  buyerMiddleware,
  orderController.getOrder
);

//admin order status update
router.post(
  "/order/status",
  requireSignin,
  adminMiddleware,
  updateOrderController.updateOrder
);
//
router.post(
  "/order/getCustomerOrders",
  requireSignin,
  adminMiddleware,
  updateOrderController.getCustomerOrders
);

module.exports = router;
