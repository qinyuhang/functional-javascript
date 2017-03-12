function reduce(arr, fn, initial) {
    return Array.prototype.reduce.call(arr, fn, initial);
}

module.exports = reduce
// The standard answer
//function reduce(arr, fn, initial) {
//  return (function reduceOne(index, value) {
//    if (index > arr.length - 1) return value // end condition
//    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//  })(0, initial) // IIFE. kick off recursion with initial values
//}

//module.exports = reduce
