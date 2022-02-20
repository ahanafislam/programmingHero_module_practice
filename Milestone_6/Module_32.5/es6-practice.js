// Solution of practice problem 1 & 2
const firstName = 'ABC';
let lastName = 'King';

lastName = 'Chowdhory';

const user = {
    fullName: `${firstName} ${lastName}`,
    email: 'abc@email.com',
    id: '123',
}

// console.log(`${user.fullName}'s email address is ${user.email} and ID is ${user.id}.`);

// Solution of practice problem 3.1
const divByFive = (number) => number/5;

// console.log(divByFive(5));

// Solution of practice problem 3.2
const sumMulFunc = (number1, number2) => (number1 + 2) * (number2 + 2);

// console.log(sumMulFunc(2,3));

// Solution of practice problem 3.3
const threeParameter = (num1, num2, num3) => num1 * num2 * num3;

// console.log(threeParameter(2, 2, 2));

// Solution of practice problem 3.4
const sumMulFuncMultiLine = (number1, number2) => {
    const sum1 = number1 + 2;
    const sum2 = number2 + 2;

    return sum1 * sum2
}

// Solution of practice problem 5
const arr1 = [2, 3, 4, 5, 6];
const arr2 = [];

arr1.map(arr => arr2.push(arr * 5));

// console.log(arr2);

// Solution of practice problem 6
const array = [11, 12, 13, 14, 15, 16, 18];

const oddNumbers = array.filter(arr => arr%2);

// console.log(oddNumbers);

// Solution of practice problem 7
const phones = [
    {
        barnd: 'Samsung',
        model: '123',
        price: 1000,
    },
    {
        barnd: 'iPhone',
        model: '13',
        price: 5000,
    },
    {
        barnd: 'Xiomi',
        model: '124',
        price: 5000,
    },
];

const myPhone = phones.find(phone => phone.price == 5000);

// console.log(myPhone);

// Solution of practice problem 8
const myObj = {
    name: 'XYZ',
    email: 'xyz@email.com',
    id: 'xyz123',
}

const {name} = myObj;

// console.log(name);

// Solution of practice problem 9
const numArry = [1, 2, 3, 4, 5]
const [,,three] = numArry;

// console.log(three);

// Solution of practice problem 10
const sumOfThreeNumber = (num1, num2, num3 = 7) => num1 + num2 + num3;

// console.log(sumOfThreeNumber(1,2));

// Solution of practive problem 11
const products = {
    phones: {
        iPhone: {
            model: '13 pro max',
            price: 1000,
        },
        samsung: {
            model: 'Galaxy S13',
            price: 950,
        }
    },
    productsList: {
        phone: ['iPhone', 'Samsung', 'XIOMI'],
        tv: ['Samsung', 'LG', 'MI'],
    }
}

// console.log(products.phones?.mi?.price);
// console.log(products.phones?.samsung?.price);
