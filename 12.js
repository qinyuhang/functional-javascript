function Spy(target, method) {
    return (function(){
        var ret = Object.create(null);
        ret.count = 0;
        ret.method = target[method];
        target[method] = function(){
            ret.count++;
            return ret.method;
        }
        return ret;
    })()
}

module.exports = Spy

// standard answer
// an IEFF here actually did nothing so it can be delete
//function Spy(target, method) {
//  var originalFunction = target[method]
//
//  // use an object so we can pass by reference, not value
//  // i.e. we can return result, but update count from this scope
//  var result = {
//    count: 0
//  }
//
//  // replace method with spy method
//  target[method] = function() {
//    result.count++ // track function was called
//    return originalFunction.apply(this, arguments) // invoke original function
//  }
//
//  return result
//}
//
//module.exports = Spy
