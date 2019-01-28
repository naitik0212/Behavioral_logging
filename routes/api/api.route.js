var express = require('express')

var router = express.Router();
var todos = require('./api/todos.route');
var user = require('./../api/userLogin.route');
var userLog = require('./api/userLogging.route');




router.use('/todos', todos);
router.use('/login', user);
router.use('/userBehaviourTracking',userLog);


module.exports = router;