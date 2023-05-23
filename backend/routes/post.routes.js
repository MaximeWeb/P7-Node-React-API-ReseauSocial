const router = require('express').Router();
const postController = require('../controllers/post.controller');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.get('/',auth, multer,postController.readPost);
router.post('/',auth, multer, postController.createPost);
router.put('/:id',auth, postController.updatePost);
router.delete('/:id',auth, postController.deletePost);
router.post('/:id/like', auth, postController.like);

router.patch('/comment-post/:id',auth, postController.commentPost);
router.patch('/edit-comment-post/:id',auth, postController.editCommentPost);
router.patch('/delete-comment-post/:id',auth, postController.deleteCommentPost);

module.exports = router;