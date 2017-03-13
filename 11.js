module.exports = function arrayMap(arr, fn) {
    return Array.prototype.map.call(arr, fn);
}
// module.exports = function arrayMap(arr, fn, thisArg) {
//   return arr.reduce(function(acc, item, index, arr) {
//     acc.push(fn.call(thisArg, item, index, arr))
//     return acc
//   }, [])
// }
