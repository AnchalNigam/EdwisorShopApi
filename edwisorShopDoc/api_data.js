define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/edwisorShop/cart/add",
    "title": "Add product to your cart",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>ProductId passed as a body parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Adding product to cart successful!\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"Admin\",\n        \"productId\": \"rJ6H7PVTf\",\n        \"_id\": \"5ae6eab6a7ddcd1ff09ba95c\",\n        \"cartId\": \"r1R2qvE6M\",\n        \"created\": \"2018-04-30T10:06:46.478Z\",\n        \"lastModified\": \"2018-04-30T10:06:46.478Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Error Occured.,\n       \"status\": 500,\n       \"data\": null\n      }\n      {\n    \"error\": true,\n    \"message\": \"Required parameters are missing\",\n    \"status\": 403,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoute.js",
    "groupTitle": "create",
    "name": "PostApiV1EdwisorshopCartAdd"
  },
  {
    "type": "post",
    "url": "/api/v1/edwisorShop/category/:catId/subcategory/create",
    "title": "Create SubCategory",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>The id of Category passed as a Url parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subcategoryName",
            "description": "<p>Name of the SubCategory passed as a body parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"SubCategory created successfully!\",\n    \"status\": 200,\n    \"data\": {\n        \"categoryId\": \"By_ahRXTz\",\n        \"subcategoryName\": \"Tops\",\n        \"_id\": \"5ae6bf3c05dd0414184deee5\",\n        \"subcategoryId\": \"rkVB1SNpf\",\n        \"created\": \"2018-04-30T07:01:16.149Z\",\n        \"lastModified\": \"2018-04-30T07:01:16.149Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Error Occured.,\n       \"status\": 500,\n       \"data\": null\n      }\n      {\n   \"error\": true,\n   \"message\": \"Required parameters are missing\",\n   \"status\": 403,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/subcategoryRoute.js",
    "groupTitle": "create",
    "name": "PostApiV1EdwisorshopCategoryCatidSubcategoryCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/edwisorShop/category/create",
    "title": "Create Category",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryName",
            "description": "<p>Name of the Category passed as a body parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   \"error\": false,\n   \"message\": \"Category created successfully!\",\n   \"status\": 200,\n   \"data\": {\n       \"categoryName\": \"Agriculture\",\n       \"_id\": \"5ae65e46be3dbf3b0482fe68\",\n       \"categoryId\": \"HkASRRm6M\",\n       \"created\": \"2018-04-30T00:07:34.265Z\",\n       \"lastModified\": \"2018-04-30T00:07:34.265Z\",\n       \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Error Occured.,\n       \"status\": 500,\n       \"data\": null\n      }\n      {\n   \"error\": true,\n   \"message\": \"Required parameters are missing\",\n   \"status\": 403,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoryRoute.js",
    "groupTitle": "create",
    "name": "PostApiV1EdwisorshopCategoryCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/edwisorShop/product/category/:catId/subcategory/:subcatId/create",
    "title": "Create Product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>The id of Category passed as a Url parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubcategoryId",
            "description": "<p>The id of SubCategory passed as a Url parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>Name of the Product passed as a body parameter(Required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productDescription",
            "description": "<p>Description of the Product passed as a body parameter(Required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productPrice",
            "description": "<p>Price of the Product passed as a body parameter(Required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productAvailability",
            "description": "<p>Availability of the Product(In stock/out oof stock) passed as a body parameter(Required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>color of the Product passed as a body parameter(optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>weight of the Product passed as a body parameter(optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>size of the Product passed as a body parameter(optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dimension",
            "description": "<p>Dimension of the Product passed as a body parameter(optional).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Product created successfully!\",\n    \"status\": 200,\n    \"data\": {\n        \"subcategoryId\": \"rkVB1SNpf\",\n        \"categoryId\": \"By_ahRXTz\",\n        \"productName\": \"FUll skeves tops\",\n        \"productDescription\": \"tops tops\",\n        \"productPrice\": 200,\n        \"productAvailability\": \"In Stock\",\n        \"color\": \"Black\",\n        \"size\": \"\",  \n        \"weight\": \"10g\",\n        \"dimension\": \"\",\n        \"_id\": \"5ae6daf892fe9c0680be3b4f\",\n        \"productId\": \"rkZ-j8Epf\",\n        \"created\": \"2018-04-30T08:59:36.694Z\",\n        \"lastModified\": \"2018-04-30T08:59:36.694Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Error Occured.,\n       \"status\": 500,\n       \"data\": null\n      }\n      {\n    \"error\": true,\n    \"message\": \"Required parameters are missing\",\n    \"status\": 403,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productRoute.js",
    "groupTitle": "create",
    "name": "PostApiV1EdwisorshopProductCategoryCatidSubcategorySubcatidCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/edwisorShop/cart/:cartId/delete",
    "title": "Delete Product from cart",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cartId",
            "description": "<p>CartId  passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Product Found in cart Deleted successfully!\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n    \"error\": true,\n    \"message\": \"No Product Found in cart to delete!\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoute.js",
    "groupTitle": "delete",
    "name": "PostApiV1EdwisorshopCartCartidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/edwisorShop/category/:catId/delete",
    "title": "Delete category by categoryId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>CategoryId of the category passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Category Deleted successfully!\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n    \"error\": true,\n    \"message\": \"No Category Found to delete!\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoryRoute.js",
    "groupTitle": "delete",
    "name": "PostApiV1EdwisorshopCategoryCatidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/edwisorShop/product/:proId/delete",
    "title": "Delete Product by ProductId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The Id of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Product Deleted successfully!\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n      {\n    \"error\": true,\n    \"message\": \"ProductId is missing\",\n    \"status\": 403,\n    \"data\": null\n}\n{\n    \"error\": true,\n    \"message\": \"No Product Found to delete!\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productRoute.js",
    "groupTitle": "delete",
    "name": "PostApiV1EdwisorshopProductProidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/edwisorShop/subcategory/:subcatId/delete",
    "title": "Delete Subcategory by SubcategoryId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubcategoryId",
            "description": "<p>The Id of the Subcategory passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"SubCategory Deleted successfully!\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n      {\n    \"error\": true,\n    \"message\": \"SubCategoryId is missing\",\n    \"status\": 403,\n    \"data\": null\n}\n{\n    \"error\": true,\n    \"message\": \"No SubCategory Found to delete!\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/subcategoryRoute.js",
    "groupTitle": "delete",
    "name": "PostApiV1EdwisorshopSubcategorySubcatidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/edwisorShop/category/:catId/edit",
    "title": "Edit Category by CategoryId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>CategoryId of the category passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Category Edited successfully!\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n    \"error\": true,\n    \"message\": \"No category is edited!\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoryRoute.js",
    "groupTitle": "edit",
    "name": "PutApiV1EdwisorshopCategoryCatidEdit"
  },
  {
    "type": "put",
    "url": "/api/v1/edwisorShop/product/:proId/edit",
    "title": "Edit Product by productId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProductId",
            "description": "<p>The Id of the product passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Product Edited successfully!\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n    \"error\": true,\n    \"message\": \"ProductId is missing\",\n    \"status\": 403,\n    \"data\": null\n}\n{\n    \"error\": true,\n    \"message\": \"Required parameters are missing\",\n    \"status\": 403,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productRoute.js",
    "groupTitle": "edit",
    "name": "PutApiV1EdwisorshopProductProidEdit"
  },
  {
    "type": "put",
    "url": "/api/v1/edwisorShop/subcategory/:subcatId/edit",
    "title": "Edit SubCategory by SubCategoryId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubcategoryId",
            "description": "<p>The Id of the Subcategory passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"SubCategory Edited successfully!\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n       }\n       {\n    \"error\": true,\n    \"message\": \"SubcategoryId is missing\",\n    \"status\": 403,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/subcategoryRoute.js",
    "groupTitle": "edit",
    "name": "PutApiV1EdwisorshopSubcategorySubcatidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/edwisorShop/cart/userId/:userId/view",
    "title": "View Cart by userId(as of now userid is admin by default)",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Pass UserId=Admin in url parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Products of your cart Found successfully!\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"Admin\",\n            \"productId\": \"rJ6H7PVTf\",\n            \"created\": \"2018-04-30T18:15:28.675Z\",\n            \"lastModified\": \"2018-04-30T18:15:28.675Z\",\n            \"cartId\": \"HkFBTA4af\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Product Found!\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1EdwisorshopCartUseridUseridView"
  },
  {
    "type": "get",
    "url": "/api/v1/edwisorShop/category/all",
    "title": "Get all Category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Category details Found successfully!\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"categoryName\": \"Mens Clothing\",\n            \"created\": \"2018-04-29T23:59:09.509Z\",\n            \"lastModified\": \"2018-04-29T23:59:09.509Z\",\n            \"categoryId\": \"r1HL2Ampf\"\n        },\n        {\n            \"categoryName\": \"Womens Clothing\",\n            \"created\": \"2018-04-30T00:01:04.000Z\",\n            \"lastModified\": \"2018-04-30T00:01:04.000Z\",\n            \"categoryId\": \"By_ahRXTz\"\n        },\n        {\n            \"categoryName\": \"Grocery\",\n            \"created\": \"2018-04-30T04:43:10.111Z\",\n            \"lastModified\": \"2018-04-30T04:43:10.111Z\",\n            \"categoryId\": \"BygZACQTG\"\n        },\n        {\n            \"categoryName\": \"Agriculture\",\n            \"created\": \"2018-04-30T00:07:34.265Z\",\n            \"lastModified\": \"2018-04-30T00:07:34.265Z\",\n            \"categoryId\": \"HkASRRm6M\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Server Error: Failed to find all Category details!\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoryRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1EdwisorshopCategoryAll"
  },
  {
    "type": "get",
    "url": "/api/v1/edwisorShop/category/:catId/subcategory/all",
    "title": "Get all SubCategory of specific Category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CategoryId",
            "description": "<p>The Id of the category passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"SubCategory detail Found successfully!\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"categoryId\": \"By_ahRXTz\",\n            \"subcategoryName\": \"Tops\",\n            \"created\": \"2018-04-30T07:01:16.149Z\",\n            \"lastModified\": \"2018-04-30T07:01:16.149Z\",\n            \"subcategoryId\": \"rkVB1SNpf\"\n        },\n        {\n            \"categoryId\": \"By_ahRXTz\",\n            \"subcategoryName\": \"Jeans\",\n            \"created\": \"2018-04-30T07:16:25.771Z\",\n            \"lastModified\": \"2018-04-30T07:16:25.771Z\",\n            \"subcategoryId\": \"SyG0GSVpz\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No SubCategory Found!\",\n    \"status\": 404,\n    \"data\": null\n}\n{\n    \"error\": true,\n    \"message\": \"CategoryId is missing\",\n    \"status\": 403,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/subcategoryRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1EdwisorshopCategoryCatidSubcategoryAll"
  },
  {
    "type": "get",
    "url": "/api/v1/edwisorShop/category/view/:catId",
    "title": "Single Category View",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>The categoryId should be passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   \"error\": false,\n   \"message\": \"Category detail Found successfully!\",\n   \"status\": 200,\n   \"data\": {\n       \"categoryName\": \"Mens Clothing\",\n       \"created\": \"2018-04-29T23:59:09.509Z\",\n       \"lastModified\": \"2018-04-29T23:59:09.509Z\",\n       \"categoryId\": \"r1HL2Ampf\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"error\": true,\n   \"message\": \"CategoryId is missing\",\n   \"status\": 403,\n   \"data\": null\n}\n{\n   \"error\": true,\n   \"message\": \"Error Occured.\",\n   \"status\": 500,\n   \"data\": null\n}\n{\n   \"error\": true,\n   \"message\": \"No Category Found!\",\n   \"status\": 404,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categoryRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1EdwisorshopCategoryViewCatid"
  },
  {
    "type": "get",
    "url": "/api/v1/edwisorShop//product/all",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Product details Found successfully!\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"subcategoryId\": \"rkVB1SNpf\",\n            \"categoryId\": \"By_ahRXTz\",\n            \"productName\": \"FUll skeves tops\",\n            \"productDescription\": \"Edited \",\n            \"productPrice\": 200,\n            \"productAvailability\": \"In Stock\",\n            \"color\": \"Black\",\n            \"size\": \"\",\n            \"weight\": \"10g\",\n            \"dimension\": \"\",\n            \"created\": \"2018-04-30T08:59:36.694Z\",\n            \"lastModified\": \"2018-04-30T08:59:36.694Z\",\n            \"productId\": \"rkZ-j8Epf\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Server Error: Failed to find all SubCategory details!\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1EdwisorshopProductAll"
  },
  {
    "type": "get",
    "url": "/api/v1/edwisorShop/product/view/by/category/:catId",
    "title": "Get all Products of specific Category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CategoryId",
            "description": "<p>The Id of the category passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Product of specific Category Found successfully!\",\n    \"status\": 200,\n    \"data\": {\n        \"subcategoryId\": \"rkVB1SNpf\",\n        \"categoryId\": \"By_ahRXTz\",\n        \"productName\": \"FUll skeves tops\",\n        \"productDescription\": \"Edited \",\n        \"productPrice\": 200,\n        \"productAvailability\": \"In Stock\",\n        \"color\": \"Black\",\n        \"size\": \"\",\n        \"weight\": \"10g\",\n        \"dimension\": \"\",\n        \"created\": \"2018-04-30T08:59:36.694Z\",\n        \"lastModified\": \"2018-04-30T08:59:36.694Z\",\n        \"productId\": \"rkZ-j8Epf\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No product Found!\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1EdwisorshopProductViewByCategoryCatid"
  },
  {
    "type": "get",
    "url": "/api/v1/edwisorShop/product/view/by/subcategory/:subcatId",
    "title": "Get all Products of specific SubCategory",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubCategoryId",
            "description": "<p>The Id of the Subcategory passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Product of specific SubCategory Found successfully!\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"subcategoryId\": \"rkVB1SNpf\",\n            \"categoryId\": \"By_ahRXTz\",\n            \"productName\": \"FUll skeves tops\",\n            \"productDescription\": \"Edited \",\n            \"productPrice\": 200,\n            \"productAvailability\": \"In Stock\",\n            \"color\": \"Black\",\n            \"size\": \"\",\n            \"weight\": \"10g\",\n            \"dimension\": \"\",\n            \"created\": \"2018-04-30T08:59:36.694Z\",\n            \"lastModified\": \"2018-04-30T08:59:36.694Z\",\n            \"productId\": \"rkZ-j8Epf\"\n        },\n        {\n            \"subcategoryId\": \"rkVB1SNpf\",\n            \"categoryId\": \"By_ahRXTz\",\n            \"productName\": \"Party wear tops\",\n            \"productDescription\": \"tops tops\",\n            \"productPrice\": 500,\n            \"productAvailability\": \"In Stock\",\n            \"color\": \"Black\",\n            \"size\": \"\",\n            \"weight\": \"10g\",\n            \"dimension\": \"\",\n            \"created\": \"2018-04-30T09:35:00.552Z\",\n            \"lastModified\": \"2018-04-30T09:35:00.552Z\",\n            \"productId\": \"rJ6H7PVTf\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No product Found!\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1EdwisorshopProductViewBySubcategorySubcatid"
  },
  {
    "type": "get",
    "url": "/api/v1/edwisorShop/product/view/:proId",
    "title": "Single Product View",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Product detail Found successfully!\",\n    \"status\": 200,\n    \"data\": {\n        \"subcategoryId\": \"rkVB1SNpf\",\n        \"categoryId\": \"By_ahRXTz\",\n        \"productName\": \"Party wear tops\",\n        \"productDescription\": \"tops tops\",\n        \"productPrice\": 500,\n        \"productAvailability\": \"In Stock\",\n        \"color\": \"Black\",\n        \"size\": \"\",\n        \"weight\": \"10g\",\n        \"dimension\": \"\",\n        \"created\": \"2018-04-30T09:35:00.552Z\",\n        \"lastModified\": \"2018-04-30T09:35:00.552Z\",\n        \"productId\": \"rJ6H7PVTf\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\n{\n   \"error\": true,\n   \"message\": \"Error Occured.\",\n   \"status\": 500,\n   \"data\": null\n}\n{\n    \"error\": true,\n    \"message\": \"ProductId is missing\",\n    \"status\": 403,\n    \"data\": null\n}\n{\n    \"error\": true,\n    \"message\": \"No product Found!\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1EdwisorshopProductViewProid"
  },
  {
    "type": "get",
    "url": "/api/v1/edwisorShop/subcategory/all",
    "title": "Get all SubCategory",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All SubCategory details Found successfully!\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"categoryId\": \"By_ahRXTz\",\n            \"subcategoryName\": \"Tops\",\n            \"created\": \"2018-04-30T07:01:16.149Z\",\n            \"lastModified\": \"2018-04-30T07:01:16.149Z\",\n            \"subcategoryId\": \"rkVB1SNpf\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Server Error: Failed to find all SubCategory details!\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/subcategoryRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1EdwisorshopSubcategoryAll"
  },
  {
    "type": "get",
    "url": "/api/v1/edwisorShop/subcategory/view/:subcatId",
    "title": "Single SubCategory View",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubcategoryId",
            "description": "<p>The subcategoryId should be passed as the URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"SubCategory detail Found successfully!\",\n    \"status\": 200,\n    \"data\": {\n        \"categoryId\": \"By_ahRXTz\",\n        \"subcategoryName\": \"Jeans\",\n        \"created\": \"2018-04-30T07:16:25.771Z\",\n        \"lastModified\": \"2018-04-30T07:16:25.771Z\",\n        \"subcategoryId\": \"SyG0GSVpz\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\n{\n   \"error\": true,\n   \"message\": \"Error Occured.\",\n   \"status\": 500,\n   \"data\": null\n}\n{\n    \"error\": true,\n    \"message\": \"SubCategoryId is missing\",\n    \"status\": 403,\n    \"data\": null\n}\n{\n    \"error\": true,\n    \"message\": \"No SubCategory Found\",\n    \"status\": 403,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/subcategoryRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1EdwisorshopSubcategoryViewSubcatid"
  }
] });
