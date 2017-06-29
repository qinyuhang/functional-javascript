function loadUsers(userIds, load, done) {
    var users = []
    for (var i = 0; i < userIds.length; i++) {
        users.push(
            load(
                (function(i){return i})(i),
                (function(i){return userIds[i]})(i)
            )
        )
    }
    return users
}
module.exports = loadUsers

// official answer
//function loadUsers(userIds, load, done) {
//    var completed = 0
//    var users = []
//    userIds.forEach(function(id, index) {
//        load(id, function(user) {
//            users[index] = user
//            if (++completed === userIds.length) return done(users)
//        })
//    })
//}
//
//module.exports = loadUsers
