const mongoose = require( 'mongoose' );

const featureMiniSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: true
    },
    des : {
        type : String,
        require : true
    },
})

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    },
    img : {
        type: String,
        require: true
    },
    feature :[featureMiniSchema]
})

const ProductModal = mongoose.model( "Product", ProductSchema )

module.exports = ProductModal ;