const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require ('../controllers/user.controller');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');
const { userValidationRules, validate, } = require('../middleware/validator')

// auth
router.post("/register", userValidationRules(), validate, authController.signUp);
router.post("/login", authController.signIn);


// user display :'block',
router.get('/',auth, userController.getAllUsers);
router.get('/:id',auth, userController.userInfo);
router.put('/:id',auth, multer,  userController.updateUser);
router.delete('/:id',auth , userController.deleteUser);




module.exports = router;