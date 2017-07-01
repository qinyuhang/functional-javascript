function getDependencies(tree) {
    var dict = [];
    function _getDep(obj, dict){
        obj&& obj.dependencies&& Object.keys(obj.dependencies).forEach(function(v,i){
            dict.indexOf(v + "@" + obj.dependencies[v].version) === -1 && dict.push(v + "@" + obj.dependencies[v].version);
            obj.dependencies[v].dependencies && _getDep(obj.dependencies[v], dict);
        })
    }
    _getDep(tree, dict);
    return dict.sort();
}

module.exports = getDependencies

// official answer

//function getDependencies(mod, result) {
//    result = result || []
//    var dependencies = mod && mod.dependencies || []
//    Object.keys(dependencies).forEach(function(dep) {
//        var key = dep + '@' + mod.dependencies[dep].version
//        if (result.indexOf(key) === -1) result.push(key)
//        getDependencies(mod.dependencies[dep], result)
//    })
//    return result.sort()
//}
//
//module.exports = getDependencies
//
