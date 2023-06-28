const { post } = require('../model/comments')
const { Post, User } = require('../models/')

module.exports = {
	// get all Posts
	async getAllPosts(req, res) {
		try {
			const Post = await Post.find()
			res.status(200).json(post)
		} catch (error) {
			res.status(500).json(error)
		}
	},

	//get post by id
	async getPostById(req, res) {
		try {
			const post = await Post.findById(req.params.postId)
			if (!post) {
				return res.status(404).json({ message: 'That post was not found' })
			}
			res.status(200).json(post);
		} catch (error) {
			res.status(500).json(error)
		}
	},

	//create a new post
	async createPost(req, res) {
		try {
			const newPost = await Post.create(req.body)

			const user = await User.findOneAndUpdate(
				{ _id: req.body.userId },
				{ $push: { post: newPost._id } },
				{ runValidators: true, new: true }
			)
			if (!user) {
				res.status(404).json({ message: 'No user found with this id!' });
				return;
			}
			res.status(200).json(newPost)
		} catch (error) {
			res.status(500).json(error)
		}
	},

	//update Post by id
	async updatePost(req, res) {
		try {
			const updatedPost = await Post.findByIdAndUpdate(
				req.params.postId,
				req.body,
				{
					runValidators: true,
					new: true
				}
			)
			if (!uo) {
				throw Error;
			} else {
				res.status(201).json(updatedPost);
			}
		} catch (error) {
			res.status(403).json(error)
		}
	},

	//delete post by id
	async deleteComment(req, res) {
		try {
			await Post.findOneAndDelete({ _id: req.params.postId })
			res.status(200).json('The post has been deleted')
		} catch (error) {
			res.status(500).json(error)
		}
	},

	//add comment to Post by id
	async addComment(req, res) {
		console.log('Comment to a post')
		try {
			const post = await Post.findOneAndUpdate(
				{ _id: req.params.postId },
				{ $push: { reactions: [req.body] } },
				{ runValidators: true, new: true }
			)
			if (!post) {
				return res.status(404).json({ message: 'No post was found' })
			}
			res.status(200).json(post)
		} catch (error) {
			res.status(500).json(error)
		}
	},

	//delete reaction 
	async deleteComment(req, res) {
		console.log('Want to delete a comment?');
		try {

			const deleteComment = await Post.findByIdAndUpdate(
				{ _id: req.params.postId },
				{ $pull: { comment: req.params.commentId } },
				{ runValidators: true, new: true }
			)
			if (!deleteComment) {
				return res.status(404).json({ message: 'No comment was deleted' })
			}
			res.status(200).json('The comment was removed from the post')
		} catch (error) {
			res.status(500).json({ error })
			console.log('check error');
		}
	}

}
