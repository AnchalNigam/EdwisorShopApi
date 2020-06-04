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
const subcategoryModel = mongoose.model('subcategory');
//end import of subcategory model

//function to create subcategory
let createSubcategory=(req,res)=>{
    let subcategoryCreationFunction = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.subcategoryName) || check.isEmpty(req.params.catId)) {

                console.log("403, forbidden request");
                logger.error(`Error Occured : Required Parameters are missing!`, 'Category Controller: createSubcategory', 10);
                let apiResponse = response.generate(true, 'Required parameters are missing', 403, null)
                reject(apiResponse);
            }
            else {
                var today = Date.now();
                let subcatId = shortid.generate();
                let newSubcategory = new subcategoryModel({
                    subcategoryId: subcatId,
                    categoryId:req.params.catId,
                    subcategoryName: req.body.subcategoryName,
                    created: today,
                    lastModified: today


                })//end newSubCategory
                newSubcategory.save((err, result) => {
                    if (err) {
                        console.log(err);
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, "Error Occured!", 500, null);
                        reject(apiResponse)
                    } else {
                        logger.info(`Subcategory Created Successfully!`, 'SubCategory Controller: createSubcategory', 10);
                        let apiResponse = response.generate(false, "SubCategory created successfully!", 200, result);
                        resolve(apiResponse);

                    }
                });//end newSubCategory save

            }//end else

        });//end new Subcategory promise

    }//end subcategorycreation function


    // making promise call.
    subcategoryCreationFunction()
        .then((result) => {

            res.send(result)
        })
        .catch((error) => {

            res.send(error);
        });//end promise call

}//end create subcategory

//Function to get all subcategory
let getAllSubcategory=(req,res)=>{
    subcategoryModel.find()
        .select('-__v -_id')
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, "Server Error: Failed to find all SubCategory details!", 500, null);
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                console.log('No SubCategory Found')
                logger.info('No Subcategory Found', 'subcategory Controller: getAllSubcategory', 5)
                let apiResponse = response.generate(true, "No SubCategory Found!", 404, null);
                res.send(apiResponse);
            } else {
                logger.info('SubCategory Found Successfully!', 'subcategory Controller: getAllSubcategory', 10)
                let apiResponse = response.generate(false, "All SubCategory details Found successfully!", 200, result);
                res.send(apiResponse);
            }
        });

}//end get all subcategory

//Function to get single view of subcategory
let viewSingleSubcategory=(req,res)=>{
    if (check.isEmpty(req.params.subcatId)) {

        console.log('Subcategory id should be passed')
        let apiResponse = response.generate(true, 'SubCategoryId is missing', 403, null)
        res.send(apiResponse);
    }
    else {
        subcategoryModel.findOne({ 'subcategoryId': req.params.subcatId })
            .select('-__v -_id')
            .exec((err, result) => {

                if (err) {
                    console.log(err)
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, "Failed to find subCategory details!", 500, null);
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    console.log('No SubCategory Found')
                    logger.info('No Subcategory Found', 'subcategory Controller: viewSingleSubcategory', 5)
                    let apiResponse = response.generate(true, "No SubCategory Found!", 404, null);
                    res.send(apiResponse)
                } else {
                    logger.info('SubCategory Found Successfully!', 'Subcategory Controller: viewSingleSubcategory', 10)
                    let apiResponse = response.generate(false, "SubCategory detail Found successfully!", 200, result);
                    res.send(apiResponse);

                }
            });
    }
}//end single view


//Funcction to get all subcategory of specific category
let viewSubcategoryOfCategory=(req,res)=>{
    if (check.isEmpty(req.params.catId)) {

        console.log('category id should be passed')
        let apiResponse = response.generate(true, 'CategoryId is missing', 403, null)
        res.send(apiResponse);
    }
    else{
        subcategoryModel.find({ 'categoryId': req.params.catId })
        .select('-__v -_id')
        .exec((err, result) => {

            if (err) {
                console.log(err)
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, "Failed to find SubCategory details!", 500, null);
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('No SubCategory Found')
                logger.info('No Subcategory Found', 'subcategory Controller: viewSubcategoryOfCategory', 5)
                let apiResponse = response.generate(true, "No SubCategory Found!", 404, null);
                res.send(apiResponse)
            } else {
                logger.info('SubCategory Found Successfully!', 'Subcategory Controller: viewSubcategoryOfCategory', 10)
                let apiResponse = response.generate(false, "SubCategory detail Found successfully!", 200, result);
                res.send(apiResponse);

            }
        });

    }
}//end 

//Function to edit subcategory
let editSubcategory=(req,res)=>{
    if (check.isEmpty(req.params.subcatId)) {

        console.log('Subcategory id should be passed')
        let apiResponse = response.generate(true, 'SubcategoryId is missing', 403, null)
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
            logger.error(`Error Occured : Required Parameters are missing!`, 'subcategory Controller: editSubcategory', 10);
            let apiResponse = response.generate(true, 'Required parameters are missing', 403, null)
            res.send(apiResponse);

        }
        else{
            subcategoryModel.update({ 'subcategoryId': req.params.subcatId }, options, { multi: true }).exec((err, result) => {
              console.log(result)
                if (err) {
    
                    console.log('Error Occured.')
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                    res.send(apiResponse)
                } else if (result.n == 0) {
    
                    console.log('SubCategory Not edited')
                    logger.info('No Subcategory is edited', 'subcategory Controller: editSubcategory', 5)
                    let apiResponse = response.generate(true, "No Subcategory is edited!", 404, null);
                   
                    res.send(apiResponse)
                } else {
                    console.log('SubCategory Edited Successfully')
                    logger.info('SubCategory Edited Successfully!', 'subcategory Controller: editSubcategory', 10)
                    let apiResponse = response.generate(false, "SubCategory Edited successfully local change 1!", 200, null);
                    
                    res.send(apiResponse);
                }
            });
        }//end else

    }
}//end

//function to delete subcategory
let deleteSubcategory=(req,res)=>{
    if (check.isEmpty(req.params.subcatId)) {

        console.log('Subcategory Id should be passed')
        let apiResponse = response.generate(true, 'SubCategoryId is missing', 403, null)
        res.send(apiResponse);
    }
    else{
        subcategoryModel.remove({'subcategoryId':req.params.subcatId})
        .exec((err,result)=>{
         if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            res.send(apiResponse)
             
            
         } else if (result.n == 0) {
             console.log('No SubCategory Found')
             logger.info('No SubCategory Found', 'subcategory Controller: deleteSubcategory',5)
             let apiResponse=response.generate(true,"No SubCategory Found to delete!",404,null);
             res.send(apiResponse)
         } else {
             logger.info('SubCategory Deleted Successfully!', 'subcategory Controller: deleteSubcategory',5)
             let apiResponse=response.generate(false,"SubCategory Deleted successfully! remote conflict",200,null);
             res.send(apiResponse)
     
         }
        });

    }
}//end

//exporting my functions
module.exports = {
    createSubcategory:createSubcategory,
    getAllSubcategory:getAllSubcategory,
    viewSingleSubcategory:viewSingleSubcategory,
    viewSubcategoryOfCategory:viewSubcategoryOfCategory,
    editSubcategory:editSubcategory,
    deleteSubcategory:deleteSubcategory
}
