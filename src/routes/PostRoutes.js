const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');

router.post('/add', PostController.createPost)
router.get('/post/:id', PostController.postOne)
router.get('/all', PostController.allPost)
router.delete('/remove/:id', PostController.removePost)
router.patch('/update/:id', PostController.updatePost)

module.exports = router;