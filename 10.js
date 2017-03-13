module.exports = function(namespace) {
    return console.log.bind(console, namespace + Array.prototype.join(arguments, ' '));
}
// standard answer
//module.exports = function(namespace) {
//  return console.log.bind(console, namespace)
//}
