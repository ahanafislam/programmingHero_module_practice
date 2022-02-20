// This funtion will stop if we get any negative numb
function antiNegative(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            break;
        }
        else{
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

let arr = [1,0,3,5,6,7,8,-9,11,3];
console.log(antiNegative(arr));
