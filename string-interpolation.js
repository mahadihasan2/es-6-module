const maya = 'Asif Akbar '
const bipasha = "ogo mour priya chere jaio na tumi"
const multiline = 'this is first line \n' + " this is the second line \n" + 'this is the third line'
// console.log(multiline)

const newMultiLine = `   this is the first Line
    this is the Second Line 
    This is the third Line
`
// console.log(newMultiLine)

const count = 5
const name = ['abir', 'Hasan', 'Kobir', 'Josim', 'Khalid']

const newFriendName = "This is the number of " + " " + count + " " + '<h3 class="friend-name">friend-5 </h3>'
// console.log(newFriendName)
const newFriendName2 = `<h3 class="friend-name">friend-${count} </h3>`
const newFriendName3 = `<h3 class="friend-name">friend-${name.length} </h3>`
// console.log(newFriendName3)

const name1 = 'Mahadi'
const name2 = "Hasan"
const fatherName = 'Abul Kalam'
const MotherName = "Salma Sultana"
const fullName = name1 + " " + name2
// console.log(fullName)
const fullDeatails = `This Person Name is : ${name1} ${name2}. Has Money is ${name.length*500}.He comes From Dhaka.His Father name is : ${fatherName}.His Mother Name is : ${MotherName}.`
console.log(fullDeatails)