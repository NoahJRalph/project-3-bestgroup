const bcrypt = require('bcrypt');
const connectDB = require('../config/connection')
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
	try {
		await connectDB();

		// Delete all existing documents
		await User.deleteMany({});
		await Post.deleteMany({});

		// Hash passwords - "belt and suspenders" approach hash is seed and model
		const hashedUserData = userData.map((user) => ({
			...user,
			password: bcrypt.hashSync(user.password, 10),
		}));

		// Seed User
		const users = await User.insertMany(hashedUserData);
		console.log('Usernames:', users.map((user) => user.username));
		console.log('Poster username:', postData.map((post) => post.postAuthor));

		// Seed posts and associate them with users
		for (let i = 0; i < postData.length; i++) {
			const { _id, postAuthor } = await Post.create(postData[i]);
			const user = await User.findOneAndUpdate(
				{ username: postAuthor },
				{
					$addToSet: {
						posts: _id,
					},
				}
			);
		}

		console.log('Database seeded!');
		process.exit(0);
	} catch (error) {
		console.error('Error seeding the database:', error);
		process.exit(1);
	}
};

seedDatabase();
