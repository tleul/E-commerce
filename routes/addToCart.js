const express = require('express');
const Products = require('../models/Products');
const Cart = require('../models/Cart');
const moment = require('moment');

const router = express.Router();


router.put('/:id',async (req, res) => {
    
        try {
        const cart = await Cart.find();
        const productIndex = await cart.findIndex(p => p.productID == req.params.id);

        console.log(productIndex)




        
      
    } catch (err) {
            console.error(err.message);
            res.status(400).json('Server Error')
    }


})

module.exports = router