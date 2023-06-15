const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require ('../controllers/user.controller');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');
const { userValidationRules, validate, } = require('../middleware/validator')

// auth
router.post("/register", userValidationRules(), validate, authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// user display :'block',
router.get('/',auth, userController.getAllUsers);
router.get('/:id',auth, userController.userInfo);
router.put('/:id',auth, multer,  userController.updateUser);
router.delete('/:id',auth , userController.deleteUser);
router.patch('/follow/:id',auth , userController.follow);
router.patch('/unfollow/:id',auth ,  userController.unfollow);



module.exports = router;