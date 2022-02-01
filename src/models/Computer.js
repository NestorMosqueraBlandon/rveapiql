import mongoose from "mongoose";

const computerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
    },
    specs: [
        {
          name: {
            type: String,
          },
          price: {
            type: String,
          },
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
          },
        },
    ],
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    description:{
        type: String
    },
    offer:{
        type: Boolean
    },
    priceOffer:{
        type: Number
    },
    games:[
        {
            image: {type: String},
            title: {type: String}
        }
    ],
    programs:[
        {
            image: String,
            title: String
        }
    ],
    available:{
        type: String
    },
    monitor:{
        type: String
    },
    type:{
        type: String
    }
},
    {
        versionKey: false,
        timestamps: true,
    }
)

const Computer = mongoose.model('Computer', computerSchema);
export default Computer;