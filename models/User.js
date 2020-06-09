const mongoose = require('mongoose');
import Products from './../client/src/component/cart/Products';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
	},
	cart: [
		{
			itemId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: Product,
			},
		},
	],
});

module.exports = User = mongoose.model('cart', UserSchema);
