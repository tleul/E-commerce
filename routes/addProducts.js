const express = require('express');
const Products = require('../models/Products');

const router = express.Router();

//POST REQUEST iTEM details
router.post('/', async (req, res) => {
	const { itemdescription, itemnameunitprice, itemImageURL } = req.body;

	const { itemImage } = req.file;
	try {
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
