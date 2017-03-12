var slice = Array.prototype.slice

function logger(namespace) {
    return function newLogger(){
        console.log(namespace, Array.prototype.join.call(newLogger.arguments, " "));
    }
}

module.exports = logger
// standard answer
//     var slice = Array.prototype.slice

//    function logger(namespace) {
//      return function() {
//        console.log.apply(console, [namespace].concat(slice.call(arguments)))
//      }
//    }

//   module.exports = logger
