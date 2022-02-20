function sum(i){
    console.log(i);
    if(i == 1) {
        return i;
    }
    return i + sum(--i);
}

console.log(sum(3));

/*
    loop-1 : print 3,
             check i == 1 //false
             3 + sum(3 - 1)

    loop-2 : print 2,
             check i == 1 //false
             3 + 2 + sum(2 - 1)

    loop-3 : print 1,
             check i == 1 // trur
                return 1
             3 + 2 + 1
 */
