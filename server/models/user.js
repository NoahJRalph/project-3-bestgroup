const { Schema, model } = require('mongoose')
const UserSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			match: 'Please enter a valid e-mail address'
		},
	},
	{
		toJSON: {
			virtual: true,
			getters: true
		},
		id: false
	}
);

const User = model('User', UserSchema)

module.exports = User