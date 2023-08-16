//Import database connection
import db from '../config/db';

//Get products
export const getAllProducts = (result) =>{
    db.query('SELECT productID, productName, desc, price FROM products', (err, results) =>{
        if (err){
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    })
}
//Get a single product
export const getProductByID = (id, result) =>{
db.query('SELECT productID, productName, desc, price FROM products WHERE productID = ?', [id],(err, results) =>{
    if (err){
        console.log(err);
        result(err, null);
    } else{
        result(null, results[0]);
    }
});
}
//Add a new product
export const insertProduct = (data, result) => {
    db.query('INSERT INTO products SET ?',data,(err, results) =>{
        if (err){
            console.log(err);
            result(err, null);
        } else{
            result(null,results[0]);
        }
    })
}
