const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        name:{
            type:String,
            require:true
        },
        year:{
            type:String,
            require:true
        },
        minPrice:{
            type:Number,
            require:true
        },
        maxPrice:{
            type:Number,
            require:true
        },
        milage:{
            type:Number,
            require:true
        },
        itemNumber:{
            type:String,
            require:true
        },
        VIN:{
            type:String,
            require:true
        },
        saves:{
            type:Number,
            require:true
        },
        shares:{
            type:Number,
            require:true
        },
        cylinders:{
            type:String,
            require:true
        },
        citiyMPG:{
            type:Number,
            require:true
        },
        highwayMPG:{
            type:Number,
            require:true
        },
        engine:{
            type:String,
            require:true
        }
    }
)

module.exports = mongoose.model('Posts', PostSchema);