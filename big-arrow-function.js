const add = (num1, num2) => num1 + num2
const sum = add(32, 67)
// console.log(sum)

// Multipul Perameter in Function 
const add2 = (num1, num2, num3) => num1 + num2 + num3
const sum2 = add2(32, 67, 87)
// console.log(sum2)

// Multiplay the Function 
const multipuly = (num1, num2) => num1 * num2
const multiplyResult = multipuly(32, 12)
// console.log(multiplyResult)

// Single Parameter in function 

const number = num1 => num1 / 5
const division = number(50)
// console.log(division)

// parameter na thakle 
const name = () => 'Mahadi Hasan'
const nameIs = name()
// console.log(nameIs)

// multi oparetion in Arrow Function 

const mathOparetion = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const total = result / 10;
    return total
}
const totalValue = mathOparetion(32, 12)
console.log(totalValue)