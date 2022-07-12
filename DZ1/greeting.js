const name = prompt("Как вас зовут?")
console.log(name)

const greeting = alert("Добро пожаловать Адилет!")

const a1 = [`jim`, `kelly`, 35,];
const a2 = [`jim`, `kelly`, 35, 56];

a1.length;
a2.length;

function diff(a1, a2) {
    return a1.filter(i=>a2.indexOf(i)<0)
        .concat(a2.filter(i=>a1.indexOf(i)<0))
}
function compare(a1, a2) {
    return a1.length == a2.length && a1.every((v,i)=>v === a2[i])
}
console.log(compare(a1, a2))

const colorList = [
    {name: 'yellow', interval: 500},
    {name: 'red', interval: 4000},
    {name: 'yellow', interval: 500},
    {name: 'green', interval: 4000}
];

let count = 0;

function changeColor() {
    if (count === colorList.length) {
        count = 0;
    }
    console.log(colorList[count].name)
    setTimeout(changeColor, colorList[count].interval)
    count = count + 1;
}

changeColor()

let a = 2 + 2;

switch (a) {
    case 3:
        alert( 'Маловато' );
        break;
    case 4:
        alert( 'В точку!' );
        break;
    case 5:
        alert( 'Перебор' );
        break;
    default:
        alert( "Нет таких значений" );
}

console.log(a)