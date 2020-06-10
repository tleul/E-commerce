const express = require('express');

const Products = require('../models/Products');
const User = require('../models/User');

const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

router.get('/:id', async (req, res) => {
	const userCart = await User.findOne({ userId: req.params.id });
	res.json(userCart.cart);
});

module.exports = router;
