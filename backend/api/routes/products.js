var express = require("express");
var router = express.Router();
var dbConn = require("../config/db");

// display admin page
router.get("/", function (req, res, next) {
  dbConn.query(
    "SELECT * FROM Products ORDER BY productID desc",
    function (err, rows) {
      if (err) {
        req.flash("error", err);
        // render to views/admin/index.ejs
        res.render("admin", { data: "" });
      } else {
        // render to views/admin/index.ejs
        res.render("admin", { data: rows });
      }
    }
  );
});

// display add admin page
router.get("/add", function (req, res, next) {
  // render to add.ejs
  res.render("admin/add", {
    // productID: "",
    productName: "",
    image: "",
    description: "",
    price: "",
    category: "",
  });
});

// add a new Product
router.post("/add", function (req, res, next) {
  let productName = req.body.productName;
  let image = req.body.image;
  let description = req.body.description;
  let price = req.body.price;
  let category = req.body.category;
  let errors = false;

  if (
    productName.length === 0 ||
    image.length === 0 ||
    description === 0 ||
    price.length === 0 ||
    category.length === 0
  ) {
    errors = true;

    // set flash message
    req.flash("error", "Please enter all required fields");
    // render to add.ejs with flash message
    res.render("admin/add", {
      productName: productName,
      image: image,
      description: description,
      price: price,
      category: category,
    });
  }

  // if no error
  if (!errors) {
    var form_data = {
      productName: productName,
      image: image,
      description: description,
      price: price,
      category: category,
    };

    // insert query
    dbConn.query(
      "INSERT INTO Products SET ?",
      form_data,
      function (err, result) {
        //if(err) throw err
        if (err) {
          req.flash("error", err);

          // render to add.ejs
          res.render("admin/add", {
            productName: form_data.productName,
            image: form_data.image,
            description: form_data.description,
            price: form_data.price,
            category: form_data.category,
          });
        } else {
          req.flash("success", "Product successfully added");
          res.redirect("/admin");
        }
      }
    );
  }
});

// display edit admin page
router.get("/edit/(productID)", function (req, res, next) {
  let productID = req.params.productID;

  dbConn.query(
    "SELECT * FROM Products WHERE productID = " + productID,
    function (err, rows, fields) {
      if (err) throw err;

      // if product not found
      if (rows.length <= 0) {
        req.flash("error", "Product not found with id = " + productID);
        res.redirect("/admin");
      }
      // if product found
      else {
        // render to edit.ejs
        res.render("admin/edit", {
          title: "Edit Product",
          productID: rows[0].productID,
          productName: rows[0].productName,
          image: rows[0].image,
          description: rows[0].description,
          price: rows[0].price,
          category: rows[0].category,
        });
      }
    }
  );
});

// update product data
router.post("admin/update/:productID", function (req, res, next) {
  let productID = req.params.productID;
  let productName = req.body.productName;
  let image = req.body.image;
  let description = req.body.description;
  let price = req.body.price;
  let category = req.body.category;
  let errors = false;

  if (
    productName.length === 0 ||
    image.length === 0 ||
    description.length === 0 ||
    price.length === 0 ||
    category.length === 0
  ) {
    errors = true;

    // set flash message
    req.flash("error", "Please enter all required fields");
    // render to add.ejs with flash message
    res.render("admin/edit", {
      productID: req.params.productID,
      productName: productName,
      image: image,
      description: description,
      price: price,
      category: category,
    });
  }

  // if no error
  if (!errors) {
    var form_data = {
      productName: productName,
      image: image,
      description: description,
      price: price,
      category: category,
    };
    // update query
    dbConn.query(
      "UPDATE Products SET ? WHERE productID = " + productID,
      form_data,
      function (err, result) {
        //if(err) throw err
        if (err) {
          // set flash message
          req.flash("error", err);
          // render to edit.ejs
          res.render("admin/edit", {
            productID: req.params.productID,
            productName: productName,
            image: image,
            description: description,
            price: price,
            category: category,
          });
        } else {
          req.flash("success", "Product successfully updated");
          res.redirect("/admin");
        }
      }
    );
  }
});

// delete a product
router.get("/delete/(:productID)", function (req, res, next) {
  let productID = req.params.productID;

  dbConn.query(
    "DELETE FROM Products WHERE productID = " + productID,
    function (err, result) {
      //if(err) throw err
      if (err) {
        // set flash message
        req.flash("error", err);
        // redirect to admin page
        res.redirect("/admin");
      } else {
        // set flash message
        req.flash(
          "success",
          "Product successfully deleted! productID = " + productID
        );
        // redirect to admin page
        res.redirect("/admin");
      }
    }
  );
});

module.exports = router;
