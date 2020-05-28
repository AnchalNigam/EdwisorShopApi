//Import
const express = require('express');
const mongoose = require('../node_modules/mongoose');  //as i am going to use mongoose functions
const shortid = require('shortid');
const response = require('./../libs/responseLib');
const check = require('./../libs/checkLib');
const logger = require('./../libs/loggerLib');
const time = require('./../libs/timeLib');
//import end

//Importing the model here 
const cartModel = mongoose.model('cart');

const productModel = mongoose.model('product');
//end import of product model



//function to add product in a carttt
let addProduct=(req,res)=>{ //chnge
    let addingProductFunction = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.productId)) {

                console.log("403, forbidden");
                logger.error(`Error Occured : Required Parameters are missing!`, 'Cart Controller: addProduct', 10);
                let apiResponse = response.generate(true, 'Required parameters are missing', 403, null)
                reject(apiResponse);
            }
            else{
                var today = Date.now();
                let cartId = shortid.generate();
                let addToCart=new cartModel({
                     cartId:cartId,
                     userId:'Admin',  //this will change as login/sgnup functionlity will come
                     productId:req.body.productId,
                     created: today,
                     lastModified: today
 

                });
                addToCart.save((err, result) => {
                    if (err) {
                        console.log(err);
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, "Error Occured!", 500, null);
                        reject(apiResponse)
                    } else {
                        logger.info(`Adding product to cart successss!`, 'Cart Controller: addProduct', 10);
                        let apiResponse = response.generate(false, "Adding product to cart successful!", 200, result);
                        resolve(apiResponse);

                    }
                });
            }




        });//end promise call



    }//end adding product function

   // making promise call.
   addingProductFunction()
   .then((result) => {

       res.send(result)
   })
   .catch((error) => {

       res.send(error);
   });//end promise call
}//edn adding product to cart function

//function to delete product from cart
let deleteProductCart=(req,res)=>{
    if (check.isEmpty(req.params.cartId)) {

        console.log('cart Id should be passed')
        let apiResponse = response.generate(true, 'CartId is missing', 403, null)
        res.send(apiResponse);
    }
    else{
        cartModel.remove({'cartId':req.params.cartId})
        .exec((err,result)=>{
         if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            res.send(apiResponse)
             
            
         } else if (result.n == 0) {
             console.log('No Product Found in cart')
             logger.info('No Product Found in cart', 'Cart Controller: deleteProductCart',5)
             let apiResponse=response.generate(true,"No Product Found in cart to delete!",404,null);
             res.send(apiResponse)
         } else {
             logger.info('Product Found in cart deleted Successfully!', 'cart Controller: deleteProductCart',5)
             let apiResponse=response.generate(false,"Product Found in cart Deleted successfully!",200,null);
             res.send(apiResponse)
     
         }
        });
    }
}//end

//Function to view products in cart
let viewProductCart=(req,res)=>{
    if (check.isEmpty(req.params.userId)) {

        console.log('User Id should be passed')
        let apiResponse = response.generate(true, 'UserId is missing', 403, null)
        res.send(apiResponse);
    }
    else{
        cartModel.find({ 'userId': req.params.userId })
        .select('-__v -_id')
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, "Server Error: Failed to find products of your cart!", 500, null);
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                console.log('No product Found')
                logger.info('No product Found', 'Cart Controller: viewProductCart', 5)
                let apiResponse = response.generate(true, "No Product Found!", 404, null);
                res.send(apiResponse);
            } else {
               
              
                logger.info('All Products of your cart!', 'Cart Controller: viewProductCart', 10)
                let apiResponse = response.generate(false, "All Products of your cart Found successfully!", 200, result);
                res.send(apiResponse);
                
            }
        });
    }
}//end 

//exporting my functions
module.exports = {
    addProduct:addProduct,
    deleteProductCart:deleteProductCart,
    viewProductCart:viewProductCart
}