// This function will remove duplicate item from array
function removeDuplicate(arr) {
    let unique = [];
    
    for(let i = 0; i < arr.length; i++){
        if(unique.indexOf(arr[i]) == -1) {
            unique.push(arr[i]);
        }
    }

    return unique;
}

let arr = [1, 2, 3, 5, 4, 6, 4,4,4,5,6,7,8,9];

console.log(removeDuplicate(arr));
