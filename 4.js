function getShortMessages(messages) {
    return messages.filter(function(a){
        return a.message.length < 50;
    }).map(function(a){
        return a.message;
    })
}

module.exports = getShortMessages
