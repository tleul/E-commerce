const mongoose = require('mongoose');
const moment = require('moment')

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    
    // @ later features will include user to sign up 
        // userId: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: "User"
        // },
        products: [
          {
            productId: Number,
            quantity: Number,
            name: String,
            price: Number
          }
        ],

        // later feature will check if the user is active user cheers
        // active: {
        //   type: Boolean,
        //   default: true
        // },
        modifiedOn: {
          type: Date,
          default: Date.now()
        }
      },
      { timestamps: true }
    );




module.exports = Cart = mongoose.model('cart', CartSchema);