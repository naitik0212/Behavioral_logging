// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    // console.log("The color is green.");
  });
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
            new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlEquals: 'https://stackoverflow.com/questions/tagged/java?sort=frequent&pageSize=15'},

        }),
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {urlEquals: 'http://localhost:3000'},

            })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});

var apiRequest = new XMLHttpRequest();

chrome.runtime.onConnect.addListener(function (port) {
    console.assert(port.name === "channel");
    port.onMessage.addListener(function (message) {
        if (message) {
            chrome.storage.sync.get(['userInfo'], function (items) {
                console.log('session retrieved', items);
                var data = {};
                data['sessionId'] = items.userInfo.sessionId;
                data['username'] = items.userInfo.username;
                data['behaviourInfo'] = message;
                // console.log("here")
                // console.log(data);

                console.log(JSON.stringify(data));

                //Send call to api
                apiRequest.open("POST", "http://localhost:3000/api/userLoggingTracking/postActivity", true);
                apiRequest.setRequestHeader("Content-Type", "application/json");
                apiRequest.send(JSON.stringify(data));
                apiRequest.onreadystatechange = function () {
                    if (apiRequest.readyState === 4) {
                        console.log(apiRequest.responseText);
                    }
                }
            });
        }

    });
});