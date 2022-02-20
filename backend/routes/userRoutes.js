const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getCurrentUserData } = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware'); 

router.post('/', registerUser); 
router.post('/login', loginUser);
router.get('/me',  protect, getCurrentUserData);
 
module.exports = router;