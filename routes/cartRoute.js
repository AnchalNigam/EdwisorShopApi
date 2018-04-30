//Import
const express = require('express');
const cartController=require('./../controller/cartController');
const shopConfig=require('../config/shopConfig');
const auth = require("./../middleware/authorization");
//import end

//Instance of express
const app = express();
//end

//Setting Routes function starts
let setRouter=(app)=>{
    let baseUrl = shopConfig.apiVersion+'/edwisorShop';

    //add products to Cart
    app.post(`${baseUrl}/cart/add`,auth.isAuthenticated,cartController.addProduct);
    //end 
    
    
    /**
    * @api {post} /api/v1/edwisorShop/cart/add Add product to your cart
    * @apiVersion 0.0.1
    * @apiGroup create
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} productId ProductId passed as a body parameter(Required)
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "error": false,
    "message": "Adding product to cart successful!",
    "status": 200,
    "data": {
        "userId": "Admin",
        "productId": "rJ6H7PVTf",
        "_id": "5ae6eab6a7ddcd1ff09ba95c",
        "cartId": "r1R2qvE6M",
        "created": "2018-04-30T10:06:46.478Z",
        "lastModified": "2018-04-30T10:06:46.478Z",
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
    //view products of Cart
    app.get(`${baseUrl}/cart/userId/:userId/view`,auth.isAuthenticated,cartController.viewProductCart);
    //end 

    /**
	 * @api {get} /api/v1/edwisorShop/cart/userId/:userId/view View Cart by userId(as of now userid is admin by default)
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
     * @apiParam {String} userId Pass UserId=Admin in url parameter.
     * 
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "All Products of your cart Found successfully!",
    "status": 200,
    "data": [
        {
            "userId": "Admin",
            "productId": "rJ6H7PVTf",
            "created": "2018-04-30T18:15:28.675Z",
            "lastModified": "2018-04-30T18:15:28.675Z",
            "cartId": "HkFBTA4af"
        }
    ]
}

	  @apiErrorExample {json} Error-Response:
	 *
	 * {
    "error": true,
    "message": "No Product Found!",
    "status": 404,
    "data": null
}

	 */

    //Delete products from cart
    app.post(`${baseUrl}/cart/:cartId/delete`,auth.isAuthenticated,cartController.deleteProductCart);
    //end delete products from cart

     /**
	 * @api {post} /api/v1/edwisorShop/cart/:cartId/delete Delete Product from cart
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 * @apiParam {String} cartId CartId  passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
    "error": false,
    "message": "Product Found in cart Deleted successfully!",
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
    "message": "No Product Found in cart to delete!",
    "status": 404,
    "data": null
}



	 */






}//end setrouter function

//Exporting routes
module.exports={
    setRouter:setRouter
}