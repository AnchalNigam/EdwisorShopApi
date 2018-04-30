//Import
const express = require('express');
const productController=require('./../controller/productController');
const shopConfig=require('../config/shopConfig');
const auth = require("./../middleware/authorization")
//import end

//Instance of express
const app = express();
//end

//Setting Routes function starts
let setRouter=(app)=>{
    let baseUrl = shopConfig.apiVersion+'/edwisorShop';
    
    //Create product 
    app.post(`${baseUrl}/product/category/:catId/subcategory/:subcatId/create`,auth.isAuthenticated,productController.createProduct);
    //category name and subcat name should be available as dropdown list(select value as id ofcategory and 
    //subcategory to create your product as it will help in searching products of same subcategory/category)

      /**
    * @api {post} /api/v1/edwisorShop/product/category/:catId/subcategory/:subcatId/create Create Product
    * @apiVersion 0.0.1
    * @apiGroup create
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    *  @apiParam {String} categoryId The id of Category passed as a Url parameter.
    *  @apiParam {String} SubcategoryId The id of SubCategory passed as a Url parameter.
    * @apiParam {String} productName Name of the Product passed as a body parameter(Required).
    * @apiParam {String} productDescription Description of the Product passed as a body parameter(Required).
    * @apiParam {String} productPrice Price of the Product passed as a body parameter(Required).
    * @apiParam {String} productAvailability Availability of the Product(In stock/out oof stock) passed as a body parameter(Required).
    * @apiParam {String} color color of the Product passed as a body parameter(optional).
    * @apiParam {String} weight weight of the Product passed as a body parameter(optional).
    * @apiParam {String} size size of the Product passed as a body parameter(optional).
    * @apiParam {String} dimension Dimension of the Product passed as a body parameter(optional).
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "error": false,
    "message": "Product created successfully!",
    "status": 200,
    "data": {
        "subcategoryId": "rkVB1SNpf",
        "categoryId": "By_ahRXTz",
        "productName": "FUll skeves tops",
        "productDescription": "tops tops",
        "productPrice": 200,
        "productAvailability": "In Stock",
        "color": "Black",
        "size": "",  
        "weight": "10g",
        "dimension": "",
        "_id": "5ae6daf892fe9c0680be3b4f",
        "productId": "rkZ-j8Epf",
        "created": "2018-04-30T08:59:36.694Z",
        "lastModified": "2018-04-30T08:59:36.694Z",
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

    
    //Edit product
    app.put(`${baseUrl}/product/:proId/edit`,auth.isAuthenticated,productController.editProduct);
    //end edit product

    /**
	 * @api {put} /api/v1/edwisorShop/product/:proId/edit Edit Product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 * @apiParam {String} ProductId The Id of the product passed as the URL parameter.
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "Product Edited successfully!",
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
    "message": "ProductId is missing",
    "status": 403,
    "data": null
}
{
    "error": true,
    "message": "Required parameters are missing",
    "status": 403,
    "data": null
}

	 */

    //Delete product
    app.post(`${baseUrl}/product/:proId/delete`,auth.isAuthenticated,productController.deleteProduct);
    //end delete product

    /**
	 * @api {post} /api/v1/edwisorShop/product/:proId/delete Delete Product by ProductId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 * @apiParam {String} productId The Id of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "Product Deleted successfully!",
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
    "message": "ProductId is missing",
    "status": 403,
    "data": null
}
{
    "error": true,
    "message": "No Product Found to delete!",
    "status": 404,
    "data": null
}


	 */



    //Get all product
    app.get(`${baseUrl}/product/all`,auth.isAuthenticated,productController.getAllProduct);
    //end get all product

    /**
	 * @api {get} /api/v1/edwisorShop//product/all Get all products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "All Product details Found successfully!",
    "status": 200,
    "data": [
        {
            "subcategoryId": "rkVB1SNpf",
            "categoryId": "By_ahRXTz",
            "productName": "FUll skeves tops",
            "productDescription": "Edited ",
            "productPrice": 200,
            "productAvailability": "In Stock",
            "color": "Black",
            "size": "",
            "weight": "10g",
            "dimension": "",
            "created": "2018-04-30T08:59:36.694Z",
            "lastModified": "2018-04-30T08:59:36.694Z",
            "productId": "rkZ-j8Epf"
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

    //View single product
    app.get(`${baseUrl}/product/view/:proId`,auth.isAuthenticated,productController.viewSingleProduct);
    //end single view

      /**
    * @api {get} /api/v1/edwisorShop/product/view/:proId  Single Product View
    * @apiVersion 0.0.1
    * @apiGroup read
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} productId The productId should be passed as the URL parameter.
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "error": false,
    "message": "Product detail Found successfully!",
    "status": 200,
    "data": {
        "subcategoryId": "rkVB1SNpf",
        "categoryId": "By_ahRXTz",
        "productName": "Party wear tops",
        "productDescription": "tops tops",
        "productPrice": 500,
        "productAvailability": "In Stock",
        "color": "Black",
        "size": "",
        "weight": "10g",
        "dimension": "",
        "created": "2018-04-30T09:35:00.552Z",
        "lastModified": "2018-04-30T09:35:00.552Z",
        "productId": "rJ6H7PVTf"
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
    "message": "ProductId is missing",
    "status": 403,
    "data": null
}
{
    "error": true,
    "message": "No product Found!",
    "status": 404,
    "data": null
}

    */

    //view products of specific category
    app.get(`${baseUrl}/product/view/by/category/:catId`,auth.isAuthenticated,productController.viewProductByCategory);
    //end view products of specific category

    /**
	 * @api {get} /api/v1/edwisorShop/product/view/by/category/:catId Get all Products of specific Category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
     * @apiParam {String} CategoryId The Id of the category passed as the URL parameter.
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "All Product of specific Category Found successfully!",
    "status": 200,
    "data": {
        "subcategoryId": "rkVB1SNpf",
        "categoryId": "By_ahRXTz",
        "productName": "FUll skeves tops",
        "productDescription": "Edited ",
        "productPrice": 200,
        "productAvailability": "In Stock",
        "color": "Black",
        "size": "",
        "weight": "10g",
        "dimension": "",
        "created": "2018-04-30T08:59:36.694Z",
        "lastModified": "2018-04-30T08:59:36.694Z",
        "productId": "rkZ-j8Epf"
    }
}



	  @apiErrorExample {json} Error-Response:
	 *
	 * {
    "error": true,
    "message": "No product Found!",
    "status": 404,
    "data": null
}

	 */



    //view products of specific subcategory of category
    app.get(`${baseUrl}/product/view/by/subcategory/:subcatId`,auth.isAuthenticated,productController.viewProductBySubcategory);
    //end view products by specific category

    /**
	 * @api {get} /api/v1/edwisorShop/product/view/by/subcategory/:subcatId Get all Products of specific SubCategory
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
     * @apiParam {String} SubCategoryId The Id of the Subcategory passed as the URL parameter.
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "All Product of specific SubCategory Found successfully!",
    "status": 200,
    "data": [
        {
            "subcategoryId": "rkVB1SNpf",
            "categoryId": "By_ahRXTz",
            "productName": "FUll skeves tops",
            "productDescription": "Edited ",
            "productPrice": 200,
            "productAvailability": "In Stock",
            "color": "Black",
            "size": "",
            "weight": "10g",
            "dimension": "",
            "created": "2018-04-30T08:59:36.694Z",
            "lastModified": "2018-04-30T08:59:36.694Z",
            "productId": "rkZ-j8Epf"
        },
        {
            "subcategoryId": "rkVB1SNpf",
            "categoryId": "By_ahRXTz",
            "productName": "Party wear tops",
            "productDescription": "tops tops",
            "productPrice": 500,
            "productAvailability": "In Stock",
            "color": "Black",
            "size": "",
            "weight": "10g",
            "dimension": "",
            "created": "2018-04-30T09:35:00.552Z",
            "lastModified": "2018-04-30T09:35:00.552Z",
            "productId": "rJ6H7PVTf"
        }
    ]
}



	  @apiErrorExample {json} Error-Response:
	 *
	 * {
    "error": true,
    "message": "No product Found!",
    "status": 404,
    "data": null
}


	 */


}//end setrouter function

//Exporting routes
module.exports={
    setRouter:setRouter
}