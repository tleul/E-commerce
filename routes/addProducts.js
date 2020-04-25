const express = require('express');
const Products = require('../models/Products')

const router = express.Router();


// draft add product  route


router.post('/', async (req,res) => {
    const {name, price, image, shortDescription } = req.body;
    try {
  
    

        const products = new Products({

            name,
            price,
            image,
            shortDescription
        })


        await products.save();
        
        res.json(products)
      
    } catch (err) {

        console.error(err.message);
        res.status(400).json('Server Error');
        
    }    


})

module.exports = router