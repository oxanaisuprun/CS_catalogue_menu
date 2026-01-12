//Array.map()
//Задача 1: Є масив чисел [1, 2, 3, 4, 5]. Створи новий масив, де кожне число помножене на 2.
const numArr = [1,2,3,4,5]

let newNumArr = numArr.map(item  => item*2)
console.log("Double array is: " + newNumArr)

//Задача 2: Є масив імен ['anna', 'bob', 'charlie']. Створи новий масив, де всі імена написані великими літерами.
const arr = ['anna', 'bob', 'charlie']

let newArr = arr.map(item => item.charAt(0).toUpperCase() + item.slice(1))
console.log("Capitalized array is: " + newArr)
//Задача 3: Є масив цін [100, 200, 300]. Додай до кожної ціни 20% податку та створи новий масив.
const priceArr = [100, 200, 300]

let fullPriceArr = priceArr.map(item => item*1.2)
console.log("Full prices array is: " + fullPriceArr)

//Array.filter()
//Задача 4: Є масив [5, 12, 8, 130, 44]. Відфільтруй тільки числа більше 10.
const someNumArr = [5, 12, 8, 130, 44]

let filteredSomeNumArr = someNumArr.filter(item => item >10)
console.log("Numbers bigger than 10: " + filteredSomeNumArr)

//Задача 5: Є масив слів ['apple', 'banana', 'kiwi', 'strawberry']. Залиш тільки ті слова, довжина яких більше 5 символів.
const wordArr = ['apple', 'banana', 'kiwi', 'strawberry']

let longWordArr = wordArr.filter(item => item.length>5)
console.log("Words longer than 5 characters: " + longWordArr)

//Задача 6: Є масив чисел [1, 2, 3, 4, 5, 6, 7, 8]. Відфільтруй тільки парні числа.
const allNumArr = [1, 2, 3, 4, 5, 6, 7, 8]

let evenNumArr = allNumArr.filter(item => item%2==0)
console.log('Even numbers: ' + evenNumArr)

//push / pop
//Задача 7: Створи масив ['apple', 'banana']. Додай в кінець 'orange' та 'grape' за допомогою push. Виведи результат.
const fruits = ['apple', 'banana']
fruits.push('orange', 'grape')
console.log(fruits)

//Задача 8: Є масив [1, 2, 3, 4, 5]. Видали останній елемент за допомогою pop і збережи його в змінну. Виведи і масив, і видалений елемент.
const popArr = [1, 2, 3, 4, 5]
const deletedItem = popArr.pop()
console.log(popArr, deletedItem)

//shift / unshift
//Задача 9: Є масив ['second', 'third']. Додай на початок 'first' за допомогою unshift. Виведи результат.
const countersArr = ['second', 'third']
countersArr.unshift('first')
console.log(countersArr)

//Задача 10: Є масив [10, 20, 30, 40]. Видали перший елемент за допомогою shift і збережи його в змінну. Виведи обидва результати.
const arrToShift = [10, 20, 30, 40]
const shiftedItem = arrToShift.shift()
console.log(arrToShift, shiftedItem)

//Комбіновані задачі
//Задача 11: Є масив [1, 2, 3, 4, 5, 6]. Відфільтруй непарні числа, потім помнож кожне на 3.
const arrToChange = [1, 2, 3, 4, 5, 6]
const changedArr = arrToChange.filter(item => item%2!==0).map(item => item*3)
console.log(changedArr)
//Задача 12: Створи порожній масив. Додай туди числа 1, 2, 3 через push. Потім видали перший елемент через shift.
const emptyArr = []
emptyArr.push(1, 2, 3)
emptyArr.shift()
console.log(emptyArr)