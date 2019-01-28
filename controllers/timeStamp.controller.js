
var timeStampService = require('../services/timestamp.service');


exports.logoutUser = async function (req, res, next) {
    var sessionId = req.body.sessionId;
    // console.log(req.body);

    try {
        var session = await timeStampService.endSession(sessionId);
        // console.log(session);
        return session ? res.status(200).json({ status: 200, message: "Logout Successful" }) : res.status(400).json({ status: 400., message: "Logout Unsuccuessful" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
};

exports.getTimeStamp = async function (req, res, next) {
    console.log(req.body);
    var username = req.body.userName;
    console.log(username);
    try {
        var sessions = await timeStampService.getSessions(username);
        return sessions.length ? res.status(200).json({ status: 200, data: sessions, message: "Succesfully Obtained Sessions" }) : res.status(400).json({ status: 400., message: "Invalid Username" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
};
