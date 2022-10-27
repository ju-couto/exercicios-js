function countBs(word) {
    return countChar(word, "B");
}

function countChar(word, char) {
       var count = 0;
       for (let i = 0; i < word.length; i++) {
           if (word[i] == char) {
               count++;
           }
       }
       return count;
}

module.exports = {
   countBs,
   countChar
}