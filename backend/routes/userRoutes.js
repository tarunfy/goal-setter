const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getCurrentUserData } = require('../controllers/userController');

router.post('/', registerUser); 
router.post('/login', loginUser);
router.get('/me', getCurrentUserData);
 
module.exports = router;