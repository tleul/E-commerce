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

		userItem = {
			_id: lookItem._id,
			itemdescription: lookItem.itemdescription,

			itemname: lookItem.itemname,

			unitprice: lookItem.unitprice,

			itemImageURL: lookItem.itemImageURL,
			qty: 1,
		};
		checkUser.cart.push(userItem);
		const userCart = await checkUser.save();
		console.log(userCart);
		return res.json(userCart);
	} else {
		const lookItem = await Products.findById(req.params.id);

		userItem = {
			_id: lookItem._id,
			itemdescription: lookItem.itemdescription,

			itemname: lookItem.itemname,

			unitprice: lookItem.unitprice,

			itemImageURL: lookItem.itemImageURL,
			qty: 1,
		};

		const getID = uuidv4();

		const newUser = new User({
			userId: getID,
			cart: userItem,
		});
		const user = await newUser.save();
		console.log(user);
		return res.json(user);
	}
});

router.put('/:id', async (req, res) => {
	const user = await User.findOne({ user: req.body.userId });
	console.log(user.cart);
	try {
		const itemIndex = user.cart
			.map((item) => item.id)
			.indexOf(req.body.updateItem.id);
		console.log(itemIndex);
		user.cart.splice(itemIndex, 1);
		user.cart.push(req.body.updateItem[0]);
		const check = await user.save();

		res.json(check);
	} catch (error) {
		console.log(error);
	}

	// console.log(req.body.user);
	// const checkUser = await User.findOne({ userId: req.body.user });

	// if (checkUser) {
	// 	console.log('we got a user');
	// 	const lookItem = await Products.findById(req.params.id);

	// 	userItem = {
	// 		_id: lookItem._id,
	// 		itemdescription: lookItem.itemdescription,

	// 		itemname: lookItem.itemname,

	// 		unitprice: lookItem.unitprice,

	// 		itemImageURL: lookItem.itemImageURL,
	// 		qty: 1,
	// 	};
	// 	checkUser.cart.push(userItem);
	// 	const userCart = await checkUser.save();
	// 	console.log(userCart);
	// 	return res.json(userCart);
	// } else {
	// 	const lookItem = await Products.findById(req.params.id);

	// 	userItem = {
	// 		_id: lookItem._id,
	// 		itemdescription: lookItem.itemdescription,

	// 		itemname: lookItem.itemname,

	// 		unitprice: lookItem.unitprice,

	// 		itemImageURL: lookItem.itemImageURL,
	// 		qty: 1,
	// 	};

	// 	const getID = uuidv4();

	// 	const newUser = new User({
	// 		userId: getID,
	// 		cart: userItem,
	// 	});
	// 	const user = await newUser.save();
	// 	console.log(user);
	// 	return res.json(user);
	// }
});

module.exports = router;
