var postMessage = require('./postmessage.js');

//command listing

var commandList = [
    "Social:",
    "/cool face",
    "Poll:",
    "/start poll",
    "/vote",
    "/results",
    "/end poll",
    "Trivia:",
    "/start quiz",
    "/next question",
    "/end quiz",
    "/score"
];

function list() {
    var botResponse = "";

    for (var x in commandList) {
        botResponse += commandList[x] + "\n";
    }

    postMessage.post(botResponse);
}

exports.list = list;