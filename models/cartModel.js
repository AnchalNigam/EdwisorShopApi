// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let cartSchema = new Schema(
    {
        cartId: {
            type: String,
            unique: true
        },
        userId: {
            type: String,               
            default: ''
        },
        productId: {
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

mongoose.model('cart', cartSchema);