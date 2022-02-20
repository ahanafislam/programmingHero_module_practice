function factorial(i) {
    console.log(i);
    if(i == 1) {
        return i;
    }

    return i * factorial(i - 1);
}

console.log(factorial(4));
