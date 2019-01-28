var UserLogging = require('../models/userLogging')

_this = this;

exports.getUserActivity = async function (userName) {


    try {
        var userActivity = await UserLogging.find({
            userName: userName
        });

        return userActivity;
    } catch (e) {
        throw Error('UserActivity not found')
    }
}

exports.postUserActivity = async function (userActivity) {
    // console.log("jkahsdkjashdksadbfkasjdbkjashdljk");
    // console.log(userActivity)

    var newUserActivity = new UserLogging({
        sessionId: userActivity.sessionId,
        activity: userActivity.activity,
        userName:userActivity.userName
    });
    // console.log(newUserActivity);


    try {
        return await newUserActivity.save();
    } catch (e) {
        throw Error("Error while creating userActivity")
    }
};

exports.putUserActivity = async function (userActivity) {
    var id = userActivity.id;

    try {
        var olduserActivity = await UserLogging.findById(id);
    } catch (e) {
        throw Error("Error in finding UserActivity")
    }

    if (!olduserActivity) {
        return false;
    }

    // console.log(oldUserBehaviour)

    olduserActivity.username = UserLogging.username;

    try {
        return await olduserActivity.save();
    } catch (e) {
        throw Error("And Error occured while updating the UserBehaviour");
        }
    };

exports.deleteUserActivity = async function (id) {

    // Delete the Todo
    try {
        var deleted = await UserLogging.remove({ _id: id })
        if (deleted.result.n === 0) {
            throw Error("UserLogging Could not be deleted")
        }
        return deleted
    } catch (e) {
        throw Error("Error Deleting the UserLogging")
    }
};