// Solution Of Problem - 1
function favouriteFood(array){
    for(const arr of array) {
        if(arr.toLowerCase().includes('m')){
            console.log(arr);
        }
    }
}

// const array = ['Mango','Banana','Apple', 'Mohito'];
// favouriteFood(array);

// Solution Of Problem - 2
function startWithMD(array) {
    let newArray = [];
    for(const arr of array) {
        if(arr.toLowerCase().startsWith('md')) {
            newArray.push(arr);
        }
    }

    return newArray;
}

// const firends = ['md Ahanaf','MD Islam', 'Alnabil', 'Mh Mashuk', 'mD Abc'];
// console.log(startWithMD(firends));

// Solution of Problem - 3
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1, 3));
