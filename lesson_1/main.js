const a = "a";

console.log(a)

let b = 45;

console.log(b)

b = "change"

console.log(b)

const bool1 = true; //boolean

const bool2 = false; //boolean

const obj = {
    key: `value`,
    username: `Sara`,
    data: {
        first_name: `Jack`,
        last_name: `Barbaro`
    }
}
console.log(obj)
console.log(obj.username)
console.log(obj.data.last_name)

const arr = ["Aydin", true, false, 35]
console.log(arr[1])

const arr2 = [
    {
        key: `value`
    },
    {
        key: `value2`
    },
    {
        key: `value3`
    }
]
console.log(arr2[2].key)
console.log(typeof obj)

const name = prompt("Как вас зовут?")
console.log(name)

// const age = alert("вам еще нет 18!")
// console.log(age)

const first_number = prompt("Первое число?")
const last_number = prompt("Второе число?")

if (first_number > last_number){
    console.log(first_number + ">" + last_number)
} else if (first_number < last_number){
    console.log(first_number + "<" + last_number)
} else {
    console.log(first_number + "=" + last_number)
}

const age = prompt("Сколько вам лет?")

if (age < 18){
    console.log("вам нельзя входить")
} else if (age > 18){
    console.log("вам можно")
} else {
    console.log("поживи еще годик")
}




