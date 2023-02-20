const express = require('express');

const Products = require('../models/Products');
const User = require('../models/User');

const router = express.Router();

router.get('/:id', async (req, res) => {
	const userCart = await User.findOne({ userId: req.params.id });

	return res.json(userCart);
});

module.exports = router;
