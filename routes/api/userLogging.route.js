var express = require('express');

var router = express.Router();

// Getting the UserLogging Controller that we just created

var userLoggingController = require('../../controllers/userLogging.controller');


// Map each API to the Controller Functions



router.post('/postActivity', userLoggingController.postUserActivity);
router.get('/getActivity/:userName', userLoggingController.getUserActivity);
router.put('/putActivity', userLoggingController.putUserActivity);
router.delete('/deleteActivity/:userName', userLoggingController.deleteUserActivity);



// Export the Router

module.exports = router;