const mongoose = require('mongoose');

const ProducSchema = new mongoose.Schema({

title:{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
},
url:{
    type:String,
    required:true,
},
createdAt:{
    type:Date,
    required:true,
},


});

mongoose.model('Product',ProdductSchema);

