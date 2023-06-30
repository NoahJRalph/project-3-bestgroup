const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
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
			match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
		},
		posts: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Post'
			}
		],
	},
	{
		toJSON: {
			virtual: true,
			getters: true
		},
		id: false
	}
);

const User = mongoose.model('User', userSchema);

module.exports = User;