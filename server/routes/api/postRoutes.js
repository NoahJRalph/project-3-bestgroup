const router = require('express').Router();
const {
	getAllPosts,
	getPostsById,
	createPosts,
	updatePosts,
	deletePosts,
	addReaction,
	deleteReaction,
} = require('../../controllers/Posts-controller')

router
	.route('/')
	.get(getAllPosts)
	.post(createPosts)

router
	.route('/:PostsId')
	.get(getPostsById)
	.put(updatePosts)
	.delete(deletePosts)
	.post(addReaction);

router
	.route("/:PostsId/reaction/:reactionId")
	.delete(deleteReaction);


module.exports = router;