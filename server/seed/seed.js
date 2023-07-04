const bcrypt = require('bcrypt');
const db = require('../config/connection')
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');
// const tagData = require('./tagData.json');

db.once('open', async () => {
	//delete all existing documents
	await User.deleteMany({})
	await Post.deleteMany({});
	await Comment.deleteMany({});

	// Hash passwords - "belt and suspenders" approach hash is seed and model 
	const hashedUserData = userData.map(user => ({
		...user,
		password: bcrypt.hashSync(user.password, 10),
	}));

	//seed User
	const users = await User.insertMany(hashedUserData);
	console.log('Usernames:', users.map(user => user.username));
	console.log('Poster username:', postData.map(post => post.username));

	// Seed posts and associate them with users
	const posts = await Post.insertMany(postData.map(post => ({
		...post,
		author: users.find(user => user.username === post.username)._id
	})));

	// Map post titles to their IDs for easy reference
	const postTitleToIdMap = {};
	posts.forEach(post => {
		postTitleToIdMap[post.postTitle] = post._id;
	});


	// Seed comments and associate them with users and posts
	await Comment.insertMany(commentData.map(comment => ({
		...comment,
		post: posts.find(post => post.title === comment.commentPostTitle)._id
	})));
	// await Tag.insertMany(tagData);
	console.log('Database seeded!');
	process.exit(0);
})

//trying to test heroku