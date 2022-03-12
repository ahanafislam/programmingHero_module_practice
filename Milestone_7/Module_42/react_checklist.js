// CheckList - 2
const num1 = 50;
const num2 = 40;

console.log("Comparison Operators");
console.log("================================");
console.log(`${num1} > ${num2} = ${num1 > num2}`);
console.log(`${num1} < ${num2} = ${num1 < num2}`);
console.log(`${num1} === ${num2} = ${num1 === num2}`);
console.log(`${num1} !== ${num2} = ${num1 !== num2}`);
console.log(`${num1} >= ${num2} = ${num1 >= num2}`);
console.log(`${num1} <= ${num2} = ${num1 <= num2}`);
console.log(`${num1} > ${num2} && ${num1} < ${num2} = ${num1 > num2 && num1 < num2}`);
console.log(`${num1} > ${num2} || ${num1} < ${num2} = ${num1 > num2 || num1 < num2}`);

// Checklist - 2.2
console.log("\nif else condition");
console.log("================================");
if(num1 > num2) {
    console.log(`${num1} is Greater-then ${num2}`);
}

else if(num1 < num2) {
    console.log(`${num1} is Less-then ${num2}`);
}
else{
    console.log(`${num1} and ${num2} are equal`);
}

// Checklist 3
console.log("\n Array");
console.log("================================");
const arr = [1,2,3,4,5,6];
console.log("Length of this array is",arr.length);
console.log(`Index number of 5 in this array is ${arr.indexOf(5)}`);
arr.push(9);
arr.push(7);
arr.pop();
console.log(arr.includes(9));

// Checklist - 4 and 5
console.log("\n Array print using for loop");
console.log("================================");
function displayArrayValue(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`Index no ${i}: ${arr[i]}`);
    }
}

function getArrayLength(arr) {
    return arr.length;
}


// displayArrayValue(arr);
// console.log(getArrayLength(arr));

// Checklist - 6 ES6-1
console.log("\n Object");
console.log("================================");
const student = {
    firstName: 'Alnabil',
    lastName: 'Islam',
    parentInfo: {
        fatherName: 'Md Nizamul Islam',
        motherName: 'Most Afroza Siddika',
    },
    subjects: [
        `Bangla`,
        `English`,
        `Math`,
        `ICT`
    ],
}

console.log(`Student's Name ${student.firstName} ${student.lastName}. Father's Name ${student.parentInfo.fatherName}. Favourite Subject ${student.subjects[2]}.`);

// Checklist - ES6-2
console.log("\n Spread Operator");
console.log("================================");
const arr1 = [1,2,3,4,5,6,7];
const arr2 = [...arr1, 50];

// console.log(arr2);
const sumOfArrLessthen50 = arr => {
    const lessThen50 = arr.filter(element => element < 50);
    let sum = 0;
    lessThen50.forEach(element => sum += element);
    return sum;
}

console.log(sumOfArrLessthen50(arr2));

// Checklist - ES6-3.1 - 2.4
console.log("\n Arrow Function");
console.log("================================");

const return9 = () => {
    return 9;
}

const mul12 = num => num * 12;

const div4 = (num1, num2) => (num1 + num2) / 4;

const multiLine = (num1, num2) => {
    const sumFive1 = num1 + 5;
    const sumFive2 = num2 + 5;
    return sumFive1 * sumFive2;
}

// console.log(div4(6,6));

// Checklist - ES6-4
console.log("\n Destructuring");
console.log("================================");

const {firstName, lastName} = student;

const [,balance] = [500, 600, 300];


// Checklist - ES6-5
const name = `Xyz Khan`;
const age = 35;
const hero = {name, age};


// Checklist - ES6-6
console.log("\n Default parameter");
console.log("================================");

const sumOf2Num = (num1, num2 = 5) => num1 + num2;

// console.log(sumOf2Num(6));


console.log(`\n১.১ অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা ২ দিয়ে গুণ করে গুণফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। `);
const mapArr = [1,2,3,4,5,6,7].map(element => element * 2);
console.log(mapArr.find(num => num < 5));


