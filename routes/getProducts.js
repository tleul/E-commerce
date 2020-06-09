const express = require('express');
const Products = require('../models/Products');
const router = express.Router();

const mongoose = require('mongoose');

router.get('/', async (req, res) => {
	const items = await Products.find();
	res.json(items);
});

module.exports = router;
