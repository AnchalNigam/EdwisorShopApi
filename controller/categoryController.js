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
const categoryModel = mongoose.model('category');
//end import of category model


//function to create category
let createCategory = (req, res) => {
    let categoryCreationFunction = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.categoryName)) {

                console.log("403, forbidden request");
                logger.error(`Error Occured : Required Parameters are missing!`, 'Category Controller: createCategory', 110);
                let apiResponse = response.generate(true, 'Required parameters are missing', 403, null)
                reject(apiResponse);
            }
            else {
                var today = Date.now();
                let catId = shortid.generate();
                let newCategory = new categoryModel({
                    categoryId: catId,
                    categoryName: req.body.categoryName,
                    created: today,
                    lastModified: today


                })//end newCategory
                newCategory.save((err, result) => {
                    if (err) {
                        console.log(err);
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, "Error Occured!", 500, null);
                        reject(apiResponse)
                    } else {
                        logger.info(`Category Created Successfully!`, 'Category Controller: createCategory', 10);
                        let apiResponse = response.generate(false, "Category created successfully!", 200, result);
                        resolve(apiResponse);

                    }
                });//end newCategory save

            }//end else

        });//end new category promise

    }//end creationCategory function


    // making promise call.
    categoryCreationFunction()
        .then((result) => {

            res.send(result)
        })
        .catch((error) => {

            res.send(error);
        });//end promise call

}//end create category function


//Function to get all Category 
let getAllCategory = (req, res) => {
    categoryModel.find()
        .select('-__v -_id')
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(`Error Occured : ${err}`, 'Database master change', 10)
                let apiResponse = response.generate(true, "Server Error: Failed to find all Category details!", 500, null);
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                console.log('No Category Found')
                logger.info('No category Found', 'Category Controller: getAllCategory', 5)
                let apiResponse = response.generate(true, "No Category Found!", 404, null);
                res.send(apiResponse);
            } else {
                logger.info('Category Found Successfully!', 'Category Controller: getAllCategory', 10)
                let apiResponse = response.generate(false, "All Category details Found successfully!", 200, result);
                res.send(apiResponse);
            }
        });

}//end get all category

//Function to get single view of category
let viewSingleCategory = (req, res) => {
    if (check.isEmpty(req.params.catId)) {

        console.log('category id should be passed')
        let apiResponse = response.generate(true, 'CategoryId is missing', 403, null)
        res.send(apiResponse);
    }
    else {
        categoryModel.findOne({ 'categoryId': req.params.catId })
            .select('-__v -_id')
            .exec((err, result) => {

                if (err) {
                    console.log(err)
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, "Failed to find Category details!", 500, null);
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    console.log('No Category Found')
                    logger.info('No category Found', 'Category Controller: viewSingleCategory', 5)
                    let apiResponse = response.generate(true, "No Category Found!", 404, null);
                    res.send(apiResponse)
                } else {
                    logger.info('Category Found Successfully!', 'Category Controller: viewSingleCategory', 10)
                    let apiResponse = response.generate(false, "Category detail Found successfully!", 200, result);
                    res.send(apiResponse);

                }
            });
    }
}//end single view of category

//Function to edit a category
let editCategory = (req, res) => {
    if (check.isEmpty(req.params.catId)) {

        console.log('category id should be passed')
        let apiResponse = response.generate(true, 'categoryId is missing', 403, null)
        res.send(apiResponse);
    }
    else {
        let options = req.body;
       
        let flag=0;
        for(let i in options){
            if(check.isEmpty(options[i])){
                flag=1;
            }
        }
        if(flag==1){
            console.log("403, forbidden request");
            logger.error(`Error Occured : Required Parameters are missing!`, 'Category Controller: editCategory', 10);
            let apiResponse = response.generate(true, 'Required parameters are missing', 403, null)
            res.send(apiResponse);

        }
        else{
            categoryModel.update({ 'categoryId': req.params.catId }, options, { multi: true }).exec((err, result) => {
            
                if (err) {
    
                    console.log('Error Occured.')
                    logger.error(`Error Occured : ${err}`, 'Database', 10)
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                    res.send(apiResponse)
                } else if (result.n == 0) {
    
                    console.log('Category Not edited')
                    logger.info('No category is edited', 'Category Controller: editCategory', 5)
                    let apiResponse = response.generate(true, "No category is edited!", 404, null);
                   
                    res.send(apiResponse)
                } else {
                    console.log('Category Edited Successfully')
                    logger.info('Category Edited Successfully!', 'Category Controller: editCategory', 10)
                    let apiResponse = response.generate(false, "Category Edited successfully!", 200, null);
                    
                    res.send(apiResponse);
                }
            });
        }//end else

    }//end else


}//end edit category

let updateCategoryFunction = (req,res)=>{

    let options = req.body;
    
    console.log(options)
    console.log(req.params.categoryId)
    categoryModel.update({ 'categoryId': req.params.categoryId }, options, { multi: true })
    .exec((err, result) => {
    
    if (err) {
    
     
    
    console.log('Error Occured.')
    
    logger.error(`Error Occured : ${err}`, 'Database', 10)
    
    let apiResponse = response.generate(true, 'Error Occured.', 500, null)
    
    res.send(apiResponse)
    
     
    
    } else if (check.isEmpty(result) || result.nModified == 0 ) {
    
     
    
    console.log('Category Not edited')
    
    //logger.info('No category is edited', 'Category Controller: editCategory', 5)
    
    let apiResponse = response.generate(true, "No category is edited!", 404, null);
    
    console.log(result)
    
    res.send(apiResponse)
    
    } else {
    
    console.log('Category Edited Successfully')
    
    //logger.info('Category Edited Successfully!', 'Category Controller: editCategory', 10)
    
    let apiResponse = response.generate(false, "Category Edited successfully!", 200, result);
    
    res.send(apiResponse);
    
    }
    
    });
    
    }

//function to delete category
let deleteCategory=(req,res)=>{
    if (check.isEmpty(req.params.catId)) {

        console.log('category Id should be passed')
        let apiResponse = response.generate(true, 'CategoryId is missing', 403, null)
        res.send(apiResponse);
    }
    else{
        categoryModel.remove({'categoryId':req.params.catId})
        .exec((err,result)=>{
         if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            res.send(apiResponse)
             
            
         } else if (result.n == 0) {
             console.log('No Category Founddddd')
             logger.info('No Category Found', 'Category Controllerrrrrr: deleteCategory',5)
             let apiResponse=response.generate(true,"No Category Found to delete!",404,null);
             res.send(apiResponse)
         } else {
             logger.info('Category Found Successfully!', 'category Controller: deleteCategory',5)
             let apiResponse=response.generate(false,"Category Deleted successfully woo!",200,null);
             res.send(apiResponse)
     
         }
        });

    }
}//end delete category

//exporting my functions
module.exports = {
    createCategory: createCategory,
    getAllCategory: getAllCategory,
    viewSingleCategory: viewSingleCategory,
    editCategory: editCategory,
    deleteCategory:deleteCategory,
    updateFunction:updateCategoryFunction

}