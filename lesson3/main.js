// function sayHello() {
//     console.log("Hello")
// }
//
// function getFullName(user, age) {
//     if (age < 18) {
//         console.log(user.first_name, user.last_name + " " + "CLOSE")
//     } else {
//         console.log(user.first_name, user.last_name + " " + "CLOSE")
//     }
// }
//
// const Name = {
//     first_name: "Maruf",
//     last_name: "Bekkeldiev"
// }
// getFullName(Name, 17)
//
// const anonym = function () {
//     console.log("teste")
// }
// anonym()
//
// function numbers(number1, number2) {
//     if (number1 > number2) {
//         console.log("NNum1 > Num2")
//     } else if (number1 < number2) {
//         console.log("NNum1 < Num2")
//     } else {
//         console.log("===")
//     }
// }
//
// const num1 = prompt("Число?")
// const num2 = prompt("Число 2?")
// numbers(num1, num2)
//
// function twoMass(arr1, arr2) {
//     if (arr1.length > arr2.length) {
//         console.log("arr1 > arr2")
//     } else if (arr1.length < arr2.length) {
//         console.log("arr1 < arr2")
//     } else {
//         console.log("arr1 = arr2")
//     }
// }
//
// const arr1 = [87, 75, 47, 29]
// const arr2 = [87, 75, 47, 29, 90, 48]
// twoMass(arr1, arr2)
//
// function bt() {
//     let line = "*"
//     while (line.length < 7) {
//         console.log(line)
//         line = line + "*"
//     }
// }
// bt()

function nums(numb1, numb2) {
    if (numb1.length > numb2.length) {
        console.log("numb1 more")
    } else if (numb1.length < numb2.length) {
        console.log("numb2 more")
    } else {
        console.log("equal")
    }
}

const numb1 = [56, 89]
const numb2 = [56, 89, 87, 543]
nums(numb1,numb2)


function arg(name) {
    console.log(name.length)
}
const name = [67, 743456, 356]
arg(name)