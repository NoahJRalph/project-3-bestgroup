const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


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
			get: (timestamp) => dateFormat(timestamp),
		},
		postAuthor: {
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

module.exports = Post;