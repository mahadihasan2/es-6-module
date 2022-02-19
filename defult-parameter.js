function addNumber(num1, num2 = 45) {

    // option = 1
    // if (num2 == undefined) {
    //     num2 = 0


    // }


    // option = 2
    // num2 = num2 || 0
    const total = num1 + num2
    return total




}

const number = addNumber(40)
console.log(number)

function addName(name1, name2 = 'chowdeory') {
    const fullName = name1 + name2
    return fullName
}

const name = addName('Mahadi Hasan' + " ")
console.log(name)