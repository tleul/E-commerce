const express = require('express');

const Products = require('../models/Products');
const User = require('../models/User');

const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
// updateOne(
//    { _id: 4, "grades.grade": 85 },
//    { $set: { "grades.$.std" : 6 } }
// )

router.post('/:id', async (req, res) => {
	const user = await User.findOne({ userId: req.body.user });
	const lookItem = await Products.findById(req.params.id);
	//check Existing User
	if (user) {
		const filterItem = user.cart.filter(
			(item) => item._id == req.params.id,
		);
		//check if the user already have the item
		if (filterItem.length > 0) {
			const itemIndex = user.cart
				.map((item) => item._id)
				.indexOf(req.params.id);

			let qtyInc = user.cart[itemIndex].qty + 1;
			userItem = {
				_id: user.cart[itemIndex]._id,
				itemdescription: user.cart[itemIndex].itemdescription,
				itemname: user.cart[itemIndex].itemname,
				unitprice: user.cart[itemIndex].unitprice,
				itemImageURL: user.cart[itemIndex].itemImageURL,
				qty: qtyInc,
				totalPrice: user.cart[itemIndex].unitprice * qtyInc,
			};
			user.cart.splice(itemIndex, 1);
			user.cart.push(userItem);
			const userItemUpdate = await user.save();
			console.log(userItemUpdate);
			return res.json(userItemUpdate);

			// if the user dont have the item inside his cart
		} else {
			userItem = {
				_id: lookItem._id,
				itemdescription: lookItem.itemdescription,
				itemname: lookItem.itemname,
				unitprice: lookItem.unitprice,
				itemImageURL: lookItem.itemImageURL,
				qty: 1,
				totalPrice: lookItem.unitprice * 1,
			};
			user.cart.push(userItem);
			const itemUpdate = await user.save();
			return res.json(itemUpdate);
		}
		//if the user is first time
	} else {
		userItem = {
			_id: lookItem._id,
			itemdescription: lookItem.itemdescription,
			itemname: lookItem.itemname,
			unitprice: lookItem.unitprice,
			itemImageURL: lookItem.itemImageURL,
			qty: 1,
			totalPrice: lookItem.unitprice * 1,
		};
		const getID = uuidv4();
		const newUser = new User({
			userId: getID,
			cart: userItem,
		});
		const newUsercart = await newUser.save();
		console.log(user);
		return res.json(newUsercart);
	}
});

// router.put('/:id', async (req, res) => {
// 	const user = await User.findOne({ userId: req.body.user });
// 	console.log(user.cart);

// 	try {
// 		let updateItem = req.body.updateItem;
// 		// console.log(updateItem);
// 		// let itemIndex = user.cart
// 		// 	.map((item) => item._id)
// 		// 	.indexOf(updateItem._id);
// 		// user.cart[itemIndex].qty = user.cart[itemIndex].qty + 1;
// 		// const itemUpdate = await user.save();
// 		// console.log(itemUpdate);
// 		// res.json(itemUpdate);
// 	} catch (error) {
// 		console.log(error);
// 	}

// 	// console.log(req.body.user);
// 	// const checkUser = await User.findOne({ userId: req.body.user });

// 	// if (checkUser) {
// 	// 	console.log('we got a user');
// 	// 	const lookItem = await Products.findById(req.params.id);

// 	// 	userItem = {
// 	// 		_id: lookItem._id,
// 	// 		itemdescription: lookItem.itemdescription,

// 	// 		itemname: lookItem.itemname,

// 	// 		unitprice: lookItem.unitprice,

// 	// 		itemImageURL: lookItem.itemImageURL,
// 	// 		qty: 1,
// 	// 	};
// 	// 	checkUser.cart.push(userItem);
// 	// 	const userCart = await checkUser.save();
// 	// 	console.log(userCart);
// 	// 	return res.json(userCart);
// 	// } else {
// 	// 	const lookItem = await Products.findById(req.params.id);

// 	// 	userItem = {
// 	// 		_id: lookItem._id,
// 	// 		itemdescription: lookItem.itemdescription,

// 	// 		itemname: lookItem.itemname,

// 	// 		unitprice: lookItem.unitprice,

// 	// 		itemImageURL: lookItem.itemImageURL,
// 	// 		qty: 1,
// 	// 	};

// 	// 	const getID = uuidv4();

// 	// 	const newUser = new User({
// 	// 		userId: getID,
// 	// 		cart: userItem,
// 	// 	});
// 	// 	const user = await newUser.save();
// 	// 	console.log(user);
// 	// 	return res.json(user);
// 	// }
// });

module.exports = router;
