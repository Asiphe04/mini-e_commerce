//import functions from product model
import{
    getAllProducts, getProductByID, insertProduct
} from '../models/productModels';

//get all products
export const allProducts=(req,res)=>{
    getAllProducts((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// get single product
export const showAProduct = (req,res)=>{
    getProductByID(req.params.productID,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// create new product
export const createProduct=(req,res)=>{
    const data = req.body;
    insertProduct(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};