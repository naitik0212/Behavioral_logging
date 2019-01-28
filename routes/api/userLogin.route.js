var express = require('express');

var router = express.Router();

// Getting the User Controller that we just created

var userController = require('../../controllers/user.controller');
var timestampController = require('../../controllers/timeStamp.controller');



// Map to the functions in controller

router.post('/newUser', userController.userDetails);
router.post('/authenticate', userController.validateUser);
router.post('/logout', timestampController.logoutUser);
router.post('/timestamp', timestampController.getTimeStamp);


// Export the Router

module.exports = router;