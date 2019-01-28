var mongoose = require('mongoose');


var session = new mongoose.Schema({
    sessionId: String,
    userName: String,
    login: {
        type: Date,
        default: Date.now()
    },
    logout: Date

});

const Session = mongoose.model('Session', session);

module.exports = Session;

