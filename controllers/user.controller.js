var userService = require('../services/user.service');
var timeStampService = require('../services/timestamp.service');


exports.userDetails = async function(req, res, next){

// console.log(req.body);

    var userDetails = {
        userName: req.body.userName,
        password: req.body.password,
        emailId : req.body.emailId
    };
x
    try{

        var createdUser = await userService.createUser(userDetails);

        return res.status(201).json({status: 201, data: createdUser, message: "User Creation Successful"})
    }catch(e){

        return res.status(400).json({status: 400, message: "User Creation failed"})
    }
};


exports.validateUser = async function (req, res, next) {


    if (!req.body.userName || !req.body.password) {
        return res.status(400).json({ status: 400, message: "Username and Password must be present" })
    }

    var validateCredentials = {
        userName: req.body.userName,
        password: req.body.password
    };

    try {
        var user = await userService.validateUser(validateCredentials);
        if(user) {
            var sessionId = await timeStampService.startSession(validateCredentials.userName);
            return res.status(200).json({ status: 200, data: sessionId, message: "Authentication Successful" })
        } else {
            return res.status(400).json({ status: 400., message: "Authentication Failed"});
        }
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
};

