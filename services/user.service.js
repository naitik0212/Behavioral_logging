var User = require('../models/users');

// Saving the context of this module inside the _the variable
_this = this;

exports.createUser = async function(userDetails){


    // Creating a new Mongoose Object by using the new keyword
    var newUser = new User({
        userName: userDetails.userName,
        password: userDetails.password
    });

    try{
        // Saving the User
        return await newUser.save();
    }catch(e){

        // return a Error message describing the reason
        throw Error("Error while Creating User")
    }
};


exports.validateUser = async function (validateCredentials) {
    var userName = validateCredentials.userName;
    var password = validateCredentials.password;

    try {

        var user = await User.find({
            userName: userName,
            password: password
        });

    } catch (e) {
        throw Error("Error occured while Finding the credentials")
    }

    return !!user.length;
};



