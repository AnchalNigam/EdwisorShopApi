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
const productModel = mongoose.model('product');
//end import of product model

//function to create product
let createProduct=(req,res)=>{
    let productCreationFunction = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.productName) || check.isEmpty(req.params.catId) || check.isEmpty(req.params.subcatId)
             || check.isEmpty(req.body.productDescription) || check.isEmpty(req.body.productPrice) 
             || check.isEmpty(req.body.productAvailability)) {

                console.log("403, forbidden request");
                logger.error(`Error Occured : Required Parameters are missing!`, 'product Controller: createProduct', 10);
                let apiResponse = response.generate(true, 'Required parameters are missing', 403, null)
                reject(apiResponse);
            }
            else {
                var today = Date.now();
                let proId = shortid.generate();
                let color;
                let weight;
                let size;
                let dimension;
                console.log(proId)
                if(check.isEmpty(req.body.color)){
                    color='';
                }
                else{
                    color=req.body.color;
                }//end color

                if(check.isEmpty(req.body.weight)){
                    weight='';
                }
                else{
                    weight=req.body.weight;
                }//end weight

                if(check.isEmpty(req.body.dimension)){
                    dimension='';
                }
                else{
                    dimension=req.body.dimension;
                }//end dimension

                if(check.isEmpty(req.body.size)){
                    size='';
                }
                else{
                    size=req.body.size;
                }//end size
                
                let newProduct = new productModel({
                    productId:proId,
                    subcategoryId:req.params.subcatId,
                    categoryId:req.params.catId,
                    productName: req.body.productName,
                    productDescription:req.body.productDescription,
                    productAvailability:req.body.productAvailability,
                    productPrice:req.body.productPrice,
                    color:color,
                    weight:weight,
                    dimension:dimension,
                    size:size,
                    created: today,
                    lastModified: today


                })//end new product
              
                newProduct.save((err, result) => {
                    console.log(result)
                    if (err) {
                        console.log(err);
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, "Error Occured!", 500, null);
                        reject(apiResponse)
                    } else {
                        logger.info(`Product Created Successfully!`, 'product Controller: createProduct', 10);
                        let apiResponse = response.generate(false, "Product created successfully!", 200, result);
                        resolve(apiResponse);

                    }
                });//end newproduct save

            }//end else

        });//end new product promise



    }//end product cretion function

    // making promise call.
    productCreationFunction()
        .then((result) => {

            res.send(result)
        })
        .catch((error) => {

            res.send(error);
        });//end promise call



}//end create product

//Function to edit a product
let editProduct=(req,res)=>{
    if (check.isEmpty(req.params.proId)) {

        console.log('Product id should be passed')
        let apiResponse = response.generate(true, 'ProductId is missing', 403, null)
        res.send(apiResponse);
    }
    else{
        let options = req.body;
        
        let flag=0;
        for(let i in options){
            if(check.isEmpty(options[i])){
                flag=1;
            }
        }
        if(flag==1){
            console.log("403, forbidden request");
            logger.error(`Error Occured : Required Parameters are missing!`, 'Product Controller: editProduct', 10);
            let apiResponse = response.generate(true, 'Required parameters are missing', 403, null)
            res.send(apiResponse);

        }
        else{
            productModel.update({ 'productId': req.params.proId }, options, { multi: true }).exec((err, result) => {
              console.log(result)
                if (err) {
    
                    console.log('Error Occured.')
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                    res.send(apiResponse)
                } else if (result.n == 0) {
    
                    console.log('product Not edited')
                    logger.info('No Product is edited', 'product Controller: editProduct', 5)
                    let apiResponse = response.generate(true, "No Product is edited!", 404, null);
                   
                    res.send(apiResponse)
                } else {
                    console.log('Product Edited Successfully')
                    logger.info('product Edited Successfully!', 'Product Controller: editProduct', 10)
                    let apiResponse = response.generate(false, "Product Edited successfully!", 200, null);
                    
                    res.send(apiResponse);
                }
            });
        }//end else



    }
}//end edit

//Function to delete a product
let deleteProduct=(req,res)=>{
    if (check.isEmpty(req.params.proId)) {

        console.log('product Id should be passed')
        let apiResponse = response.generate(true, 'ProductId is missing', 403, null)
        res.send(apiResponse);
    }
    else{
        productModel.remove({'productId':req.params.proId})
        .exec((err,result)=>{
         if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            res.send(apiResponse)
             
            
         } else if (result.n == 0) {
             console.log('No product Found')
             logger.info('No product Found', 'Product Controller: deleteProduct',5)
             let apiResponse=response.generate(true,"No Product Found to delete!",404,null);
             res.send(apiResponse)
         } else {
             logger.info('Product Deleted Successfully!', 'product Controller: deleteProduct',5)
             let apiResponse=response.generate(false,"Product Deleted successfully!",200,null);
             res.send(apiResponse)
     
         }
        });
    }
}//end delete

//function to get all product
let getAllProduct=(req,res)=>{
    productModel.find()
    .select('-__v -_id')
    .exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, "Server Error: Failed to find all product details!", 500, null);
            res.send(apiResponse);
        } else if (check.isEmpty(result)) {
            console.log('No product Found')
            logger.info('No product Found', 'product Controller: getAllProduct', 5)
            let apiResponse = response.generate(true, "No product Found!", 404, null);
            res.send(apiResponse);
        } else {
            logger.info('Product Found Successfully!', 'Product Controller: getAllProduct', 10)
            let apiResponse = response.generate(false, "All Product details Found successfully!", 200, result);
            res.send(apiResponse);
        }
    });
}//end get all product

//function to view single product
let viewSingleProduct=(req,res)=>{
    if (check.isEmpty(req.params.proId)) {

        console.log('Product id should be passed')
        let apiResponse = response.generate(true, 'ProductId is missing', 403, null)
        res.send(apiResponse);
    }
    else{
        productModel.findOne({ 'productId': req.params.proId })
        .select('-__v -_id')
        .exec((err, result) => {

            if (err) {
                console.log(err)
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, "Failed to find product details!", 500, null);
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('No product Found')
                logger.info('No product Found', 'product Controller: getAllProduct', 5)
                let apiResponse = response.generate(true, "No product Found!", 404, null);
                res.send(apiResponse)
            } else {
                logger.info('product Found Successfully!', 'product Controller: viewSingleProduct', 10)
                let apiResponse = response.generate(false, "Product detail Found successfully!", 200, result);
                res.send(apiResponse);

            }
        });
    }
}//end single view product

//function to get all product based on category
let viewProductByCategory=(req,res)=>{
    if (check.isEmpty(req.params.catId)) {

        console.log('Category id should be passed')
        let apiResponse = response.generate(true, 'CategoryId is missing', 403, null);
        res.send(apiResponse);
    }
    else{
        productModel.find({ 'categoryId': req.params.catId })
        .select('-__v -_id')
        .exec((err, result) => {

            if (err) {
                console.log(err)
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, "Failed to find product details!", 500, null);
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('No product Found')
                logger.info('No product Found', 'product Controller: getAllProduct', 5)
                let apiResponse = response.generate(true, "No product Found!", 404, null);
                res.send(apiResponse)
            } else {
                logger.info('product Found Successfully!', 'product Controller: viewSingleProduct', 10)
                let apiResponse = response.generate(false, "All Product of specific Category Found successfully!", 200, result);
                res.send(apiResponse);

            }
        });

    }
}//end

//function to view products based on subcategory(like all tops)
let viewProductBySubcategory=(req,res)=>{
    if (check.isEmpty(req.params.subcatId)) {

        console.log('SubCategory id should be passed')
        let apiResponse = response.generate(true, 'SubCategoryId is missing', 403, null);
        res.send(apiResponse);
    }
    else{
        productModel.find({ 'subcategoryId': req.params.subcatId })
        .select('-__v -_id')
        .exec((err, result) => {

            if (err) {
                console.log(err)
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, "Failed to find product details!", 500, null);
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('No product Found')
                logger.info('No product Found', 'product Controller: getAllProduct', 5)
                let apiResponse = response.generate(true, "No product Found!", 404, null);
                res.send(apiResponse)
            } else {
                logger.info('All product Found Successfully!', 'product Controller: viewSingleProduct', 10)
                let apiResponse = response.generate(false, "All Product of specific SubCategory Found successfully remote conflict!", 200, result);
                res.send(apiResponse);

            }
        });

    }
}//end

//exporting my functions
module.exports = {
     createProduct:createProduct,
     editProduct:editProduct,
     deleteProduct:deleteProduct,
     getAllProduct:getAllProduct,
     viewSingleProduct:viewSingleProduct,
     viewProductByCategory:viewProductByCategory,
     viewProductBySubcategory:viewProductBySubcategory
}
