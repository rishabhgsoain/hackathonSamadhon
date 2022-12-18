let express = require("express");
let router = express.Router();
let userController = require("../controllers/user");
router.get("/", userController.getMainPage);

router.get("/add-product", userController.getAddProducts);
router.post("/add-product", userController.postAddProducts);

router.get("/services", userController.getServices);

module.exports = router;
