// Solution to problem No: 1
const student1 = {
    firstName: "Alnabil",
    lastName: "Islam",
    department: {
        name: "CSE",
        headOfDepartment: "XYZ khan",
        advisor: "Abc Khan",
    },
    courses: [
        "Structural Programming",
        "Introduction to Software Engineering",
        "Database Management System",
    ],
    showStudentInfo: function() {
        return `Name: ${this.firstName} ${this.lastName} | Department: ${this.department.name}`;
    }
}

// console.log(student1.showStudentInfo());

// Solution to problem No: 2
const departmentStr = `Department: ${student1.department.name} | Head: ${student1.department.headOfDepartment} | Course-1: ${student1.courses[0]}`;
// console.log(departmentStr);

// Solution to problem No: 3
// 3.1:
const arrow1 = () => 89;
// 3.2:
const arrow2 = num => num/7;
// 3.3:
const arrow3 = (num1, num2) => (num1+num2)/2;
// 3.4:
const arrow4 = (num1, num2) => {
    const sum = (num1 + 7) + (num2 + 7);
    return sum;
}

// console.log(arrow4(5,8));

// Solution to problem No: 4
const divBy7 = [1,2,3,4,5].map(num => num/7);

// divBy7.forEach((val, index) => console.log(`index-${index}: ${val}`))

// Solution to problem No: 6
const obj = {name:"Abcd", age: 25};
const {name} = obj;

const array = [500, 4000, 3000, 1000];

const [,balance] = array;
console.log(balance);
