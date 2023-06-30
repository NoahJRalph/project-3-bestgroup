const router = require('express').Router();
const {
	getAllPosts,
	getPostById,
	createPost,
	updatePost,
	deletePost,
	addComment,
	deleteComment,
} = require('../../controllers/post-controller')

router
	.route('/')
	.get(getAllPosts)
	.post(createPost);

router
	.route('/:postsId')
	.get(getPostById)
	.put(updatePost)
	.delete(deletePost)
	.post(addComment);

router
	.route("/:postsId/comment/:commentId")
	.delete(deleteComment);


module.exports = router;