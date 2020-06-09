const mongoose = require('mongoose');

const SchemaProducts = new mongoose.Schema({
	itemdescription: {
		type: String,
	},
	itemname: {
		type: String,
	},
	unitprice: {
		type: Number,
	},
	itemImageURL: {
		type: String,
	},
});

module.exports = Products = mongoose.model('products', SchemaProducts);
