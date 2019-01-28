var userLoggingService = require('../services/userLogging.service');

_this = this;

exports.getUserActivity = async function (req, res, next) {

    var userName = req.params.userName;
    console.log(userName);
    try {

        var temp = await userLoggingService.getUserActivity(userName)

        // Return the whole list with the appropriate HTTP Status Code and Message.
        return res.status(200).json({ status: 200, data: temp, message: "Succesfully Recieved userActivity" });

    } catch (e) {

        //Error Response Message with Code and the Error Message.

        return res.status(400).json({ status: 400, message: e.message });

    }
};

exports.postUserActivity = async function (req, res, next) {

    // Req.Body contains the form submit values.
    // console.log("here#################here")
    // console.log(req.body);
    var activity = {
        activity: req.body.behaviourInfo,
        sessionId: req.body.sessionId,
        userName: req.body.username
    };
    // console.log("here#################here")
    // console.log(activity);


    try {


        var newUserActivity = await userLoggingService.postUserActivity(activity);
        return res.status(201).json({ status: 201, data: newUserActivity, message: "Succesfully Created Behaviour" })
    } catch (e) {


        return res.status(400).json({ status: 400, message: "Behaviour Creation was Unsuccesfull" })
    }
};

exports.putUserActivity = async function (req, res, next) {

    // Id is necessary for the update

    if (!req.body._id) {
        return res.status(400).json({ status: 400., message: "Id must be present" })
    }

    var id = req.body._id;

    console.log(req.body);

    var activity = {
        id,
        sessionId: req.body.sessionId ? req.body.sessionId : null,
        username: req.body.userName ? req.body.userName : null,
        behaviourInfo: req.body.activity ? req.body.activity : null
    };

    try {
        var updatedBehaviour = await userLoggingService.putUserActivity(activity)
        return res.status(200).json({ status: 200, data: updatedBehaviour, message: "Succesfully Updated Behaviour" })
    } catch (e) {
        return res.status(400).json({ status: 400., message: e.message })
    }
};

exports.deleteUserActivity = async function (req, res, next) {

    var id = req.params.id;

    try {
        var deleted = await userLoggingService.deleteUserActivity(id);
        return res.status(204).json({ status: 204, message: "Succesfully Deleted Activtiy" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }

};