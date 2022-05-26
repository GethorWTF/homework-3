// 1 упражнение

const strdig = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6']
let sum = 0
for (let i = strdig.length - 1; i >= 0; i--) {
    if (!isNaN(strdig[i]))
    sum += +strdig[i]

}
alert(sum)


// 2 упражнение
const arr = ["AngularJS", "jQuery"]
    arr.unshift("Backbone.js")
    arr.push("ReactJS", "Vue.js")
    arr.splice(2, 0, "CommonJS")
    const removed = arr.indexOf("jQuery")
    console.log(`Это здесь лишнее: ${arr.splice(removed, 1)}`)


// 3 упражнение

  let quote = 'Как однажды Жак звонарь сломал фонарь головой'.split(' ')
  let removed = quote.indexOf('однажды')
  quote.splice(4, 0, quote[removed])
  quote.splice(removed, 1);
  [quote[5], quote[6]] = [quote[6], quote[5]]
  let str = quote.join(' ')
  console.log(str)

// 4 упражнение

let person={
name:"John",
age:"40",
}
    let property = prompt('Введите нужное Вам свойство')
  if (property in person) {
    alert(person[property])
  } else {
    person[property] = prompt('Такого свойства еще нет. Укажите значения свойства ' + property + ' у Джона')
        alert('Свойство ' + property + ' установлено в значение ' + person[property] + ' у Джона.')
}

// 5 упражнение

const mobile = {
  brand: 'Iphone',
  model: 'thirteen',
  resolution: 'button',
  color: 'black'
}
person.mobile = mobile
console.log(person)

//6 упражнение

let arr = []
let n = 5
let summ = 0

for (let index = 0; index < n; index++) {
    arr.push(prompt('Введите что-либо', 'Еще что-либо'))
}

arr.map( (val) => !isNaN(val) ? summ += parseInt(val): null )

alert(`Сумма чисел массива: ${summ}`)

//7 уражнение
const multi = []

for (let i = 0; i < 9; i++) {
  multi[i] = []
  for (let j = 0; j < 9; j++) {
    multi[i][j] = (i + 1) * (j + 1)
  }
  console.log(multi[i].join(' '));
}
