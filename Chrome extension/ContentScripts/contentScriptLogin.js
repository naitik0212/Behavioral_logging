// chrome.storage.sync.set({"userId": "Abc"});
// // console.log("here");

var sessionId = localStorage.getItem('sessionId')
var username = localStorage.getItem('userName');
console.log(sessionId,username);

var userInfo = {
    sessionId: sessionId,
    username:username
}

// console.log(userInfo);
chrome.storage.sync.set({ 'userInfo': userInfo }, function () {
    console.log('userInfo saved');
});