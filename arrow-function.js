// Function Declaretion
function add1(num1, num2) {
    return num1 + num2
}

// Function Expresition
const add2 = function add2(num1, num2) {
    return num1 + num2
}
// (Anonyomouse) Function Expresion
const add3 = function (num1, num2) {
    return num1 + num2
}

// Arrow Function 
const add4 = (num1, num2) => num1 + num2







const sum1 = add1(32, 67)
const sum2 = add2(32, 67)
const sum3 = add3(32, 67)
const sum4 = add4(32, 67)
console.log(sum1, sum2, sum3, sum4)