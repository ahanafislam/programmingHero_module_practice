// This Function can find Average Number From Array
function average(arr) {
    let sum = 0;

    arr.forEach(val => {
        sum += val;
    });

    let avg = sum/arr.length;

    return avg;
}

let arr = [24, 55, 17, 87, 100];

console.log(average(arr));
