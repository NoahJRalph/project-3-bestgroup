
const { Schema, model } = require('mongoose')

const moment = require('moment')

const PostSchema = new Schema(
	{
		postText: {
			type: String,
			require: true,
			minlength: 1,
			maxlength: 280
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
		},
		username: {
			type: String,
			require: true
		},
	},
	{
		toJSON: {
			virtual: true,
			getters: true
		},
		id: false
	}
)


const Post = model('Post', PostSchema)

module.exports = Post