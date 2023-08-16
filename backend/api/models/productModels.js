//Import database connection
import db from '../config/db';

//Get products
export const getProducts = (result) =>{
    db.query('SELECT productID, productName, desc, price FROM products', (err, results) =>{
        if (err){
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}
//Get a signle product
export const getProductByID = (productID, result) =>{
db.query('SELECT productID, productName, desc, price FROM products WHERE products = ?', [productID],(err, results) =>{
    if (err){
        console.log(err);
        result(err, null);
    } else{
        result(null, results[0]);
    }
});
}
//Add a new product
export const addProduct = (data, result) => {
    db.query('INSERT INTO products SET ?',[data],(err, results) =>{
        if (err){
            console.log(err);
            result(err, null);
        } else{
            result(null, results);
        }
    })
}
