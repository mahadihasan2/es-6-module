// const number = 1240;
// number = 1250; // not Alloweed 

const userName = 'tumi amar jan pakhi';
const amiTumi = 'ami' + " " + userName; // porer const ke use kora jabe
console.log(amiTumi)

// array ke same babe use kora jabe but re Assained kora jabe na

const numbers = [29, 45, 67, 89, 90]
numbers.length
console.log(numbers)
// numbers = [68, 53, 78, 43, 32] // not allowed
numbers.push(56) // Allowed
console.log(numbers)
numbers.pop();
numbers[0] = 333;
console.log(numbers)
console.log(numbers)

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    console.log(number)
    sum = sum + number
    console.log(sum)
}