function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.map(function(testUser){
            return goodUsers.some(function(goodUser){
                return goodUser.id == testUser.id;
            })
        }).reduce(function(a,b){
            return a && b;
        })
    };
}

module.exports = checkUsersValid
// can use every to replace map+reduce in this function
// return submittedUsers.every(fucntion(testUser){
//     return goodUsers.some(function(goodUser){
//         return goodUser.id == testUser.id;
//     })
// })
