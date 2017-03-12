function countWords(inputWords) {
    return inputWords.reduce(function(ret, word){
        ret[word] = !!ret[word] ? ret[word] + 1 : 1;
        return ret;
    }, Object.create(null));
}

module.exports = countWords
