// Return the largest string
function bestFriend(friends) {
    let maxLen = "";
    
    for(let i = 0; i < friends.length; i++) {
        if(maxLen.length < friends[i].length) {
            maxLen = friends[i];
        }
    }

    return maxLen;
}

let friends = ["abcdefg", "abcd", "abcdefghi", "abcdef"];

console.log(bestFriend(friends));
