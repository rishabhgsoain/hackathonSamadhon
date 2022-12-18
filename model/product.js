// let products = require("../database/product");

let db = require("../util/database");

module.exports = class Products {
  constructor(name, price, description, image, modelNumber, quantity) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.modelNumber = modelNumber;
    this.quantity = quantity;
  }
  save() {
    return db.execute(
      `INSERT INTO userproducts(name,price,description,image,modelNumber,quantity) VALUES(?,?,?,?,?,?)`,
      [
        this.name,
        this.price,
        this.description,
        this.image,
        this.modelNumber,
        this.quantity,
      ]
    );
  }
  static getAllProducts() {
    return db.execute(`SELECT * FROM userproducts`);
  }

  static getProductById(id) {
    return db.execute(`SELECT * FROM userproducts WHERE id=?`, [id]);
  }
  static deleteProductbyId(id) {
    return db.execute(`DELETE FROM userproducts WHERE id=?`, [id]);
  }
};
