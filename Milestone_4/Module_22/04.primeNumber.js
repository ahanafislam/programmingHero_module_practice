// This function will return number is prime number or not. Here I just tried a different approach
function primeNum(num) {
    if(num > 1) {
        if(num % 2 == 0 || num % 3 == 0 || num % 5 == 0){
            return `${num} is not a prime number`;
        }
        return `${num} is prime number`;
    }
    return "Please enter any number greater-then 1"
}

let num = 1085;
console.log(primeNum(num));
