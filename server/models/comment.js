const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
	{
		commentId: {
			type: mongoose.SchemaTypes.ObjectId,
			default: () => new mongoose.Types.ObjectId()
		},
		commentText: {
			type: String,
			required: true,
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
	},
	{
		toJSON: {
			getters: true
		},
		id: false,
		_id: false
	}
);

const Comment = model('Comment', commentSchema)


module.exports = Comment;