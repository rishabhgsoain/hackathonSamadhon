let Product = require("../model/product");

module.exports.getMainPage = (req, res, next) => {
  Product.getAllProducts()
    .then((products) => {
      res.render("./user/userMain", {
        products: products[0],
      });
      console.log(products[0]);
    })

    .catch((err) => {
      console.log("Error in user file dhundlo" + err);
    });
};

module.exports.getAddProducts = (req, res, next) => {
  res.render("./user/addProduct");
};

module.exports.postAddProducts = (req, res, next) => {
  let name = req.body.name;
  let price = req.body.price;
  let description = req.body.description;
  let image = req.body.image;
  let modelNumber = req.body.modelNumber;
  let quantity = req.body.quantity;

  let newProduct = new Product(
    name,
    price,
    description,
    image,
    modelNumber,
    quantity
  );
  newProduct.save();
  res.redirect("/user");
};

module.exports.getServices = (req, res, next) => {
  res.render("./user/services");
};
