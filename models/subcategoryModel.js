// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let subcategorySchema = new Schema(
    {
    subcategoryId:{
        type:String,
        unique:true
    },
     categoryId:{                 //this is for getting all subcategory of specific category(will use categoryid for this)
         type:String,
         default:''
     },
     subcategoryName:{
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

mongoose.model('subcategory', subcategorySchema);