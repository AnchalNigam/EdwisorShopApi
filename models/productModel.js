// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let productSchema = new Schema(
    {
        productId: {
            type: String,
            unique: true
        },
        subcategoryId: {
            type: String,
            default: ''
        },
        categoryId: {
            type: String,
            default: ''
        },
        productName: {
            type: String,
            default: ''
        },
        productDescription: {
            type: String,
            default: ''
        },
        productPrice: {
            type: Number,
            default: 0
        },
        productAvailability: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        },
        weight: {
            type: String,
            default: ''      //string is for storing unit also like 2g or 2kg
        },
        dimension: {
            type: String,
            default: ''
        },
        created: {
            type: Date,
            default: Date.now
        },

        lastModified: {
            type: Date,
            default: Date.now
        }

    }
);//end my category schema

mongoose.model('product', productSchema);