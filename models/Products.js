const mongoose = require('mongoose');


const SchemaProducts = new mongoose.Schema({

    
    name:{
            type: String
    },
    
    price:{
        type:Number
    },
    image:{
        type: String

    },
     shortDescription:{

        type: String
     }



})


module.exports = Products = mongoose.model('products', SchemaProducts)