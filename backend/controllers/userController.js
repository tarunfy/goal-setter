
//@desc Register new user
//@route POST /api/users
//@access Public
const registerUser = (req,res) => {
    res.json({message:'register user'});
};

//@desc Authenticate a user
//@route POST /api/users/login
//@access Public
const loginUser = (req,res) => {
    res.json({message:'login user'});
};

//@desc Get users data
//@route GET /api/users
//@access Public
const getCurrentUserData  = (req,res) => {
    res.json({message:'Current user'});
};


module.exports = {
    registerUser,
    loginUser,
    getCurrentUserData
};