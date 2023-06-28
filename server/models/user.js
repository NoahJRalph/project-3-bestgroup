const { Schema, model, Types } = require('mongoose')
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
			match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
		},
		posts: [
			{
				type: Types.ObjectId,
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

const User = model('User', UserSchema)

module.exports = User