function repeat(operation, num) {
    for (var i = 0; i < num; i++){
        operation.call(null, []);
    }
}

// Do not remove the line below
module.exports = repeat
