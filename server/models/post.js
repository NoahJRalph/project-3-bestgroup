const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
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
		postAuthor: {
			type: String,
			require: true
		},
		comments: [{
			commentText: {
				type: String,
				required: true,
				minlenght: 1,
				maxlength: 280
			},
			commentAuthor: {
				type: String,
				required: true
			},
			createdAt: {
				type: Date,
				default: Date.now,
				get: (timestamp) => dateFormat(timestamp),
			}
		}]
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