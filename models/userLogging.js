var mongoose = require('mongoose');


var userLoggingSchema = new mongoose.Schema({
    userName: {
        type: String,
    },
    sessionId: String,
    activity: mongoose.Schema.Types.Mixed,
    date: {
        type: Date,
        default: Date.now()
    }
});

const userLogging = mongoose.model('userLogging', userLoggingSchema);

module.exports = userLogging;

