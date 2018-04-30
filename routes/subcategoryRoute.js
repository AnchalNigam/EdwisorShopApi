//Import
const express = require('express');
const subcategoryController=require('./../controller/subcategoryController');
const shopConfig=require('../config/shopConfig');
const auth = require("./../middleware/authorization")
//import end

//Instance of express
const app = express();
//end

//Setting Routes function starts
let setRouter=(app)=>{
    let baseUrl = shopConfig.apiVersion+'/edwisorShop';

    //Subcategory creation of specific category
    app.post(`${baseUrl}/category/:catId/subcategory/create`,auth.isAuthenticated,subcategoryController.createSubcategory);
    //end subcategory creation

     /**
    * @api {post} /api/v1/edwisorShop/category/:catId/subcategory/create Create SubCategory
    * @apiVersion 0.0.1
    * @apiGroup create
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    *  @apiParam {String} categoryId The id of Category passed as a Url parameter.
    * @apiParam {String} subcategoryName Name of the SubCategory passed as a body parameter(Required)
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "error": false,
    "message": "SubCategory created successfully!",
    "status": 200,
    "data": {
        "categoryId": "By_ahRXTz",
        "subcategoryName": "Tops",
        "_id": "5ae6bf3c05dd0414184deee5",
        "subcategoryId": "rkVB1SNpf",
        "created": "2018-04-30T07:01:16.149Z",
        "lastModified": "2018-04-30T07:01:16.149Z",
        "__v": 0
    }
}


     @apiErrorExample {json} Error-Response:
    *
    * {
       "error": true,
       "message": "Error Occured.,
       "status": 500,
       "data": null
      }
      {
   "error": true,
   "message": "Required parameters are missing",
   "status": 403,
   "data": null
}

    */


    //Get all subcategory
    app.get(`${baseUrl}/subcategory/all`,auth.isAuthenticated,subcategoryController.getAllSubcategory);
    //end get all subcategory

    /**
	 * @api {get} /api/v1/edwisorShop/subcategory/all Get all SubCategory
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "All SubCategory details Found successfully!",
    "status": 200,
    "data": [
        {
            "categoryId": "By_ahRXTz",
            "subcategoryName": "Tops",
            "created": "2018-04-30T07:01:16.149Z",
            "lastModified": "2018-04-30T07:01:16.149Z",
            "subcategoryId": "rkVB1SNpf"
        }
    ]
}


	  @apiErrorExample {json} Error-Response:
	 *
	 * {
    "error": true,
    "message": "Server Error: Failed to find all SubCategory details!",
    "status": 500,
    "data": null
}

	 */


    //Get single subcategory view
    app.get(`${baseUrl}/subcategory/view/:subcatId`,auth.isAuthenticated,subcategoryController.viewSingleSubcategory);
    //end single subcategory view

    /**
    * @api {get} /api/v1/edwisorShop/subcategory/view/:subcatId  Single SubCategory View
    * @apiVersion 0.0.1
    * @apiGroup read
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} SubcategoryId The subcategoryId should be passed as the URL parameter.
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "error": false,
    "message": "SubCategory detail Found successfully!",
    "status": 200,
    "data": {
        "categoryId": "By_ahRXTz",
        "subcategoryName": "Jeans",
        "created": "2018-04-30T07:16:25.771Z",
        "lastModified": "2018-04-30T07:16:25.771Z",
        "subcategoryId": "SyG0GSVpz"
    }
}


     @apiErrorExample {json} Error-Response:
    *
    * 
{
   "error": true,
   "message": "Error Occured.",
   "status": 500,
   "data": null
}
{
    "error": true,
    "message": "SubCategoryId is missing",
    "status": 403,
    "data": null
}
{
    "error": true,
    "message": "No SubCategory Found",
    "status": 403,
    "data": null
}

    */

    
    //Get subcategory of specific category
    app.get(`${baseUrl}/category/:catId/subcategory/all`,auth.isAuthenticated,subcategoryController.viewSubcategoryOfCategory);
    //end get subcategory

   /**
	 * @api {get} /api/v1/edwisorShop/category/:catId/subcategory/all Get all SubCategory of specific Category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
     * @apiParam {String} CategoryId The Id of the category passed as the URL parameter.
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "SubCategory detail Found successfully!",
    "status": 200,
    "data": [
        {
            "categoryId": "By_ahRXTz",
            "subcategoryName": "Tops",
            "created": "2018-04-30T07:01:16.149Z",
            "lastModified": "2018-04-30T07:01:16.149Z",
            "subcategoryId": "rkVB1SNpf"
        },
        {
            "categoryId": "By_ahRXTz",
            "subcategoryName": "Jeans",
            "created": "2018-04-30T07:16:25.771Z",
            "lastModified": "2018-04-30T07:16:25.771Z",
            "subcategoryId": "SyG0GSVpz"
        }
    ]
}


	  @apiErrorExample {json} Error-Response:
	 *
	 * {
    "error": true,
    "message": "No SubCategory Found!",
    "status": 404,
    "data": null
}
{
    "error": true,
    "message": "CategoryId is missing",
    "status": 403,
    "data": null
}

	 */



    //Edit subcategory
    app.put(`${baseUrl}/subcategory/:subcatId/edit`,auth.isAuthenticated,subcategoryController.editSubcategory);
    //end edit subcategory

    /**
	 * @api {put} /api/v1/edwisorShop/subcategory/:subcatId/edit Edit SubCategory by SubCategoryId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 * @apiParam {String} SubcategoryId The Id of the Subcategory passed as the URL parameter.
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "SubCategory Edited successfully!",
    "status": 200,
    "data": null
}


	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
       }
       {
    "error": true,
    "message": "SubcategoryId is missing",
    "status": 403,
    "data": null
}

	 */

    //Delete subcategory
    app.post(`${baseUrl}/subcategory/:subcatId/delete`,auth.isAuthenticated,subcategoryController.deleteSubcategory);
    //end delete subcategory

   /**
	 * @api {post} /api/v1/edwisorShop/subcategory/:subcatId/delete Delete Subcategory by SubcategoryId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 * @apiParam {String} SubcategoryId The Id of the Subcategory passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "SubCategory Deleted successfully!",
    "status": 200,
    "data": null
}


	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
       }
      {
    "error": true,
    "message": "SubCategoryId is missing",
    "status": 403,
    "data": null
}
{
    "error": true,
    "message": "No SubCategory Found to delete!",
    "status": 404,
    "data": null
}


	 */





}//end setrouter function

//Exporting routes
module.exports={
    setRouter:setRouter
}