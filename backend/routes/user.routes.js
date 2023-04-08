const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require ('../controllers/user.controller');
// const auth = require('../middleware/auth');
const { userValidationRules, validate, } = require('../middleware/validator')

// auth
router.post("/register", userValidationRules(), validate, authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// user display :'block',
router.get('/',  userController.getAllUsers);
router.get('/:id',  userController.userInfo);
router.put('/:id',  userController.updateUser);
router.delete('/:id',  userController.deleteUser);
router.patch('/follow/:id',  userController.follow);
router.patch('/unfollow/:id',  userController.unfollow);



module.exports = router;