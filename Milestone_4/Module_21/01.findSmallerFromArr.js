// This Function will help you to find smaller number from an array
function findSmaller(arr) {
    let min = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }

    return min;
}

let arr = [11, 2, 3, 4, 5, 6];
console.log(findSmaller(arr));;
