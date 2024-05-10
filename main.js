// Bailey Simons
// May 10, 2024
// Arrow Functions

// FUNCTION 1

// const nameAndSchool = (firstName, schoolName) => {
//     return [firstName, schoolName]
// }


// const firstName = prompt("Enter your first name:");
// const schoolName = prompt("Which school do you attend, " + firstName + "?:");


// console.log('Hello ' + firstName + " from " + schoolName + '!');

// ----

// FUNCTION 2

// const calculate = (cost1, cost2, cost3) => {
//     const sum = cost1 + cost2 + cost3;
//     return sum;
// }
// const cost1 = 24;
// const cost2 = 12;
// const cost3 = 19;

// const cost = calculate(cost1, cost2, cost3);
// console.log(cost);

// ----

// FUNCTION 3


const sqdNumber = (num = 4) => {
    const squared = num * num;
    alert(num + ' squared is ' + squared + '.');
}

const num2 = prompt('Enter a number.');

sqdNumber(num2);


