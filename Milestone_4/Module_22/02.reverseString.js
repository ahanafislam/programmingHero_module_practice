// This function reverse any string value
function reverseStr(str) {
    let newStr = "";

    for(let i = (str.length - 1); i > -1; i--) {
        newStr += str[i];
    }

    return newStr;
}

let str = "hello";
console.log(reverseStr(str));
