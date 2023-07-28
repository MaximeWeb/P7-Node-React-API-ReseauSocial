const router = require('express').Router();
const postController = require('../controllers/post.controller');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.get('/',auth,postController.readPost);
router.get('/:id',auth, postController.readOnePost);
router.post('/',auth, multer, postController.createPost);
router.put('/:id',auth, multer, postController.updatePost);
router.delete('/:id',auth, postController.deletePost);
router.put('/like/:id',auth, postController.likePost);



module.exports = router;