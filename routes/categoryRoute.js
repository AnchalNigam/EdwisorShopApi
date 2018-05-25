//Import
const express = require('express');
const categoryController = require('./../controller/categoryController');
const shopConfig = require('../config/shopConfig');
const auth = require("./../middleware/authorization")
//import end

//Instance of express
const app = express();
//end

//Setting Routes function starts
let setRouter = (app) => {
    let baseUrl = shopConfig.apiVersion + '/edwisorShop';

    //Category Creation Route
    app.post(`${baseUrl}/category/create`, auth.isAuthenticated, categoryController.createCategory);
    //end category creation route

    /**
    * @api {post} /api/v1/edwisorShop/category/create Create Category
    * @apiVersion 0.0.1
    * @apiGroup create
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} categoryName Name of the Category passed as a body parameter(Required)
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
   "error": false,
   "message": "Category created successfully!",
   "status": 200,
   "data": {
       "categoryName": "Agriculture",
       "_id": "5ae65e46be3dbf3b0482fe68",
       "categoryId": "HkASRRm6M",
       "created": "2018-04-30T00:07:34.265Z",
       "lastModified": "2018-04-30T00:07:34.265Z",
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

    //Get all category
    app.get(`${baseUrl}/category/all`, auth.isAuthenticated, categoryController.getAllCategory);
    //end end all category
    /**
	 * @api {get} /api/v1/edwisorShop/category/all Get all Category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "All Category details Found successfully!",
    "status": 200,
    "data": [
        {
            "categoryName": "Mens Clothing",
            "created": "2018-04-29T23:59:09.509Z",
            "lastModified": "2018-04-29T23:59:09.509Z",
            "categoryId": "r1HL2Ampf"
        },
        {
            "categoryName": "Womens Clothing",
            "created": "2018-04-30T00:01:04.000Z",
            "lastModified": "2018-04-30T00:01:04.000Z",
            "categoryId": "By_ahRXTz"
        },
        {
            "categoryName": "Grocery",
            "created": "2018-04-30T04:43:10.111Z",
            "lastModified": "2018-04-30T04:43:10.111Z",
            "categoryId": "BygZACQTG"
        },
        {
            "categoryName": "Agriculture",
            "created": "2018-04-30T00:07:34.265Z",
            "lastModified": "2018-04-30T00:07:34.265Z",
            "categoryId": "HkASRRm6M"
        }
    ]
}

	  @apiErrorExample {json} Error-Response:
	 *
	 * {
    "error": true,
    "message": "Server Error: Failed to find all Category details!",
    "status": 500,
    "data": null
}

	 */

    //Get single category view
    app.get(`${baseUrl}/category/view/:catId`, auth.isAuthenticated, categoryController.viewSingleCategory);
    //end single category view

    /**
    * @api {get} /api/v1/edwisorShop/category/view/:catId  Single Category View
    * @apiVersion 0.0.1
    * @apiGroup read
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} categoryId The categoryId should be passed as the URL parameter.
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
   "error": false,
   "message": "Category detail Found successfully!",
   "status": 200,
   "data": {
       "categoryName": "Mens Clothing",
       "created": "2018-04-29T23:59:09.509Z",
       "lastModified": "2018-04-29T23:59:09.509Z",
       "categoryId": "r1HL2Ampf"
   }
}

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "CategoryId is missing",
   "status": 403,
   "data": null
}
{
   "error": true,
   "message": "Error Occured.",
   "status": 500,
   "data": null
}
{
   "error": true,
   "message": "No Category Found!",
   "status": 404,
   "data": null
}


    */

    //Edit category
   /*  app.put(`${baseUrl}/category/:catId/edit`, auth.isAuthenticated, categoryController.editCategory); */
   app.put(`${baseUrl}/category/:categoryId/edit`, categoryController.updateFunction);
    //end edit category

    /**
	 * @api {put} /api/v1/edwisorShop/category/:catId/edit Edit Category by CategoryId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 * @apiParam {String} categoryId CategoryId of the category passed as the URL parameter.
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "Category Edited successfully!",
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
    "message": "No category is edited!",
    "status": 404,
    "data": null
}

	 */

    //Delete category
    app.post(`${baseUrl}/category/:catId/delete`, auth.isAuthenticated, categoryController.deleteCategory);
    //end delete category
    /**
	 * @api {post} /api/v1/edwisorShop/category/:catId/delete Delete category by categoryId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 * @apiParam {String} categoryId CategoryId of the category passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "Category Deleted successfully!",
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
    "message": "No Category Found to delete!",
    "status": 404,
    "data": null
}

	 */


 

}//end setrouter function

//Exporting routes
module.exports = {
    setRouter: setRouter
}