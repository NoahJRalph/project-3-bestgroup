
const router = require('express').Router();
const postRoutes = require('./postRoutes.js');
const userRoutes = require('./userRoutes.js');

router.use('/post', postRoutes);
router.use('/user', userRoutes);

module.exports = router;
