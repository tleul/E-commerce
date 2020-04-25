const express = require('express');
const Products = require('../models/Products');
const Cart = require('../models/Cart');
const moment = require('moment');

const router = express.Router();


router.post('/:id',async (req, res) => {
    const { productId,
        quantity ,
        name ,
        price} = req.body;
    
        try {
        const cart = await Cart.find();
        const productIndex = await cart.findIndex(p => p.productId == req.params.id);
            if (cart.product){
                        if (productIndex > -1){

                let productItem = cart.Products[productIndex];

                productItem.quantity = quantity
                cart.product[productIndex] = productItem


                        }else {
                
                cart.products.push({productId,
                    quantity ,
                    name ,
                    price });
            }
            cart = await cart.save();

            return res.json(cart)
        }
            else {

                const newCart =  await new Cart({


                    products: [
                        {
                    productId,
                    quantity ,
                    name ,
                    price
                        }
                    ]

                })

                await newCart.save();

                res.json(newCart);
            
            
            
            }
        

            


        
      
    } catch (err) {
            console.error(err.message);
            res.status(400).json('Server Error')
    }


})

module.exports = router