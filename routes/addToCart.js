const express = require('express');

const Products = require('../models/Products');
const User = require('../models/User');

const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

router.post('/:id', async (req, res) => {
	console.log(req.body.user);
	const checkUser = await User.findOne({ userId: req.body.user });
	if (checkUser) {
		console.log('we got a user');
		const lookItem = await Products.findById(req.params.id);
		checkUser.cart.push(lookItem.id);
		const userCart = await checkUser.save();
		console.log(userCart);
		return res.json(userCart);
	} else {
		const lookItem = await Products.findById(req.params.id);

		const getID = uuidv4();

		const newUser = new User({
			userId: getID,
			cart: lookItem.id,
		});
		const user = await newUser.save();
		console.log(user);
		return res.json(user);
	}
});

module.exports = router;
