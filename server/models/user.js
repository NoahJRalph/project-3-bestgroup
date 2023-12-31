const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
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
			match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
		},
		posts: [{
			type: Schema.Types.ObjectId,
			ref: 'Post'
		}],
	},
	{
		toJSON: {
			virtual: true,
			getters: true
		},
		id: false
	}
);

userSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;


