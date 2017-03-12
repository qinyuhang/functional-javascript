function duckCount() {
    return Array.prototype.reduce.call(duckCount.arguments, function(a, b){
        return Object.prototype.hasOwnProperty.call(b, "quack") ? ++a : a;
    }, 0);
}

module.exports = duckCount
// standard answer
//     function duckCount() {
//      return Array.prototype.slice.call(arguments).filter(function(obj) {
//        return Object.prototype.hasOwnProperty.call(obj, 'quack')
//      }).length
//    }

//    module.exports = duckCount
