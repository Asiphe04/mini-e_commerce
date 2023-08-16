//Import database connection
const db = require('../config/db')

//Get products
const getAllProducts = (result) =>{
    db.query('SELECT * FROM Products', (err, results) =>{
        if (err){
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}
//Get a single product
// const getProductByID = (productID, result) =>{
// db.query('SELECT * FROM Products WHERE productID = ?', [productID],(err, results) =>{
//     if (err){
//         console.log(err);
//         result(err, null);
//     } else{
//         result(null, results[0]);
//     }
// });
// }

const getProductByID = (productID, result) => {
    const query = 'SELECT * FROM Products WHERE productID = ?';
    db.query(query, [productID], (err, results) => {
      if (err) {
        console.log('Error executing query:', query);
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    });
  };
  

//Add a new product
const insertProduct = (data, result) => {
    db.query('INSERT INTO products SET ?',data,(err, results) =>{
        if (err){
            console.log(err);
            result(err, null);
        } else{
            result(null,results[0]);
        }
    })
}
module.exports = {
    getAllProducts, 
    getProductByID, 
    insertProduct
}