const router = require('express').Router();
const postController = require('../controllers/post.controller');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.get('/',auth, multer,postController.readPost);
router.post('/',auth, multer, postController.createPost);
router.put('/:id',auth, postController.updatePost);
router.delete('/:id',auth, postController.deletePost);
router.put('/like/:id',auth, postController.like);
router.patch('/unlike-post/:id',auth, postController.unlikePost);

router.patch('/comment-post/:id',auth, postController.commentPost);
router.patch('/edit-comment-post/:id',auth, postController.editCommentPost);
router.patch('/delete-comment-post/:id',auth, postController.deleteCommentPost);

module.exports = router;