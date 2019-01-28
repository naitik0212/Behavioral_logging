var port = chrome.runtime.connect({ name: "channel" });


function callback(e) {
    var e = window.e || e;
    var target = e.target || e.srcElement;
    var message = {};


    if (e.target.tagName === 'A' || target.tagName === 'BUTTON') {
        // console.log(target.parentNode.parentNode.getElementsByClassName("post-tag"));
        var a1 = target.parentNode.parentNode.getElementsByClassName("post-tag");

        var tags = [];

        for(var i in a1){
            console.log(a1[i].text);
            if(a1[i].innerHTML)
                tags.push(a1[i].innerHTML);
        }


        message['type'] = e.type;
        message['tagName'] = target.tagName;
        message['className'] = target.className;

        if (target.className === "vote-up-off vote-up-on"){
                message['action'] = "Vote Clicked";
                message['value'] = "Up Vote";
            }


        if (target.className === "vote-down-off vote-down-on"){
                message['action'] = "Vote Clicked";
                message['value'] = "Down Vote";
        }

        if(target.className === "question-hyperlink"){
            message['action'] = "Question Clicked";
            message['value'] = target.innerHTML;
        }
        if(target.className === "post-tag" || target.className.includes("post-tag")){
            message['action'] = "Tag Clicked";
            message['value'] = target.innerHTML;
        }
        if(target.className === "") {
            message['action'] = "MoreInfo Clicked";
            message['value'] = target.innerHTML;
        }

        if(target.className === "d-inline-flex ai-center ws-nowrap s-btn s-btn__primary") {
            message['action'] = "Ask Question Clicked";
            message['value'] = target.innerHTML;
        }

        // if(target.className.match(/^grid--cell*$/)){
        //     message['action'] = "Options Clicked";
        //     message['value'] = target.innerHTML;
        // }

        if(target.className === "grid--cell s-btn s-btn__muted s-btn__outlined py8 ws-nowrap" || target.className.includes("grid--cell")) {
            message['action'] = "Options Clicked";
            if(target.innerHTML.includes("featured")){
                message['value'] = "featured";
            }else {
                message['value'] = target.innerHTML.trim();
            }
        }

        if(target.innerHTML.includes("Watch")||target.innerHTML.includes("Unwatch")){
            message['value'] = "Watch Tag";
            message['action'] = "Watch Clicked";
        }

        if(target.innerHTML.includes("Ignore")||target.innerHTML.includes("Unignore")){
            message['value'] = "Ignore Tag";
            message['action'] = "Ignore Clicked";

        }

        message['innerHTML'] = target.innerHTML;
        message['relevantTags'] = tags;
        // message['pathname'] = target.pathName;
        console.log(message)
        console.log("----")
        console.log(JSON.stringify(message));
        port.postMessage(message);
        // port.postMessage(target)
    }
    if (target.tagName === 'BUTTON') {
        console.log(e);
    }
    // if (e.target.tagName !== 'A')
    //     return;

}


console.log(document.addEventListener)
if (document.addEventListener) {
    document.addEventListener('click', callback, false);
    // document.addEventListener('wheel', callback, false);
    // document.addEventListener('mousedown', callback, false);
    // document.addEventListener('mouseover', callback, false);
}
else
    document.attachEvent('onclick', callback);

