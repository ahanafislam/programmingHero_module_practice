// This will create fibonacci series from user choice
function fibonacci(num) {
    if(typeof num !== `number`) {
        return "Sorry Only Numbers are allow"
    }
    else if(num <= 1 || num < 0) {
        return "Please Enter A Number greater-than 1 ";
    }

    let fibo = [0, 1];

    for(let i = 2; i < num; i++) {
        fibo[i] = fibo[i-1] + fibo[i - 2];
    }

    return fibo;
}

console.log(fibonacci(13));
