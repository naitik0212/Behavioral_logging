var Session = require('../models/session')

_this = this;

exports.getSessions = async function (username) {
    try {
        var sessions = await Session.find({
            userName: username
        });
        console.log(sessions);

        return sessions;

    } catch (e) {

        throw Error('Error while retrieving sessions')
    }
};

exports.startSession = async function (username) {

    // Creating a new Mongoose Object by using the new keyword
    var newSession = new Session({
        sessionId: username + "-" + Math.floor((Math.random() * 10000000000) + 1),
        userName: username,
        login: Date.now()
    })

    console.log(newSession.login);

    try {

        // Saving the session
        var savedSession = await newSession.save();

        return savedSession;
    } catch (e) {

        // return a Error message describing the reason
        throw Error("Error while Starting Session")
    }
}

exports.endSession = async function (sessionId) {

    try {
        //Find the old Todo Object by the Id

        var session = await Session.findOneAndUpdate({
            sessionId: sessionId
        }, {logout: Date.now()});
    } catch (e) {
        console.log(e)
        throw Error("Error occured while updating the session")
    }

    return session;

};
