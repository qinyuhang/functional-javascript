function repeat(operation, num) {
    if (num <= 0) return;
    setTimeout(function() {
        operation();
    }, 0);
    return function(){
        setTimeout(function() {
            repeat(operation, --num)
        }, 0);
    }();
}

module.exports = repeat;
