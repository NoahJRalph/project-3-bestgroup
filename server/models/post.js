const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const commentSchema = require('./comment')
const tagSchema = require('./tags')
const postSchema = new Schema(
	{
		postTitle: {
			type: String,
			require: true,
			minlength: 1,
			maxlength: 80
		},
		postText: {
			type: String,
			require: true,
			minlength: 1,
			maxlength: 280
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) => dateFormat(timestamp),
		},
		username: {
			type: String,
			require: true
		},
		comments: [{
			type: Schema.Types.ObjectId,
			ref: 'Comment'
		}],
		tags: [tagSchema]
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

module.exports = Post;