
const { Schema, model } = require('mongoose')
const CommentSchema = require('./comment')

const moment = require('moment')

const postSchema = new Schema(
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
		comments: [CommentSchema]
	},
	{
		toJSON: {
			virtual: true,
			getters: true
		},
		id: false
	}
)


const Post = model('Post', postSchema)

module.exports = Post