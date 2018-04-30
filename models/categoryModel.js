// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let categorySchema = new Schema(
    {
     categoryId:{
         type:String,
         unique:true
     },
     categoryName:{
         type:String,
         default:''
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

mongoose.model('category', categorySchema);