const mongoose = require('mongoose');
const moment = require('moment')

const CommentSchema = new mongoose.Schema(
	{
		commentId: {
			type: mongoose.SchemaTypes.ObjectId,
			default: () => new mongoose.Types.ObjectId()
		},
		commentBody: {
			type: String,
			required: true,
			maxlength: 280
		},
		username: {
			type: String,
			required: true
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
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


module.exports = CommentSchema;