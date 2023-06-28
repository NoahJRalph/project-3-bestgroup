const router = require('express').Router();
const {
	getAllPosts,
	getPostsById,
	createPosts,
	updatePosts,
	deletePosts,
	addComment,
	deleteComment,
} = require('../../controller/post-controller')

router
	.route('/')
	.get(getAllPosts)
	.post(createPosts)

router
	.route('/:PostsId')
	.get(getPostsById)
	.put(updatePosts)
	.delete(deletePosts)
	.post(addComment);

router
	.route("/:PostsId/comment/:commentId")
	.delete(deleteComment);


module.exports = router;