// This function will find smaller number from three variable
function findMin(num1, num2, num3) {
    min = num1;

    if(num2 < min && num2 < num3) {
        min = num2;
    }

    else if( num3 < min && num3 < num2) {
        min = num3;
    }

    return `${min} is smaller number`;
}

let num1 = 101110;
let num2 = 101.1;
let num3 = -101;

console.log(findMin(num1, num2, num3));
