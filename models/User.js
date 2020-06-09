const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	userId: {
		type: String,
	},
	cart: [],
});

module.exports = User = mongoose.model('users', UserSchema);
