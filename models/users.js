var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    emailId: {
        type: String
    }
});

const userDetails = mongoose.model('userDetails', userSchema);

module.exports = userDetails;

