
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,default:0,min:0},
    description:{type:String}
},{
    timestamps:true
})

module.exports = mongoose.model('product',productSchema);