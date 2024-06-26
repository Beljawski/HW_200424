// 1. Напишите функцию checkEmail(string), которая в качестве аргумента будет получать строковый тип. Функция должна проверить, есть ли в строке символ “@” и “.” Если оба символа будут находиться в строке - функция должна вернуть true, в противном случае false

// 	Пример:
// 	let result1 = checkEmail(“some@email.com”)
// 	let result2 = checkEmail(“some@emailcom”)
// 	console.log(result1)
// console.log(result2)

// 	Результат:
// 	true
// 	false

// ----------Решение----------------
// let string1 = "some@email.com";
// let string2 = "some@emailcom";
// function checkEmail(string) {
//     if(string.includes("@") && string.includes(".")){
//     return true;
//     }
//     return false
// }

// console.log(checkEmail(string1));
// console.log(checkEmail(string2));

//--------------------------------------------------------
// 2. Напишите функцию initCap(string), которая получает строковое значение и возвращает эту же строку с заглавной первой буквой по примеру:

// Пример:
// 	let result1 = initCap(“sam”)
// 	let result1 = initCap(“steven”)
// 	console.log(result1)
// console.log(result2)

// 	Результат:
// 	Sam
// Steven
//
// ----------Решение----------------
// let string1 = initCap("sam");
// let string2 = initCap("steven");

// function initCap(string) {
//     let array = string.split("");
//     array[0] = array[0].toUpperCase();
//     let newString = array.join("");
//     return newString;
// }
// console.log(initCap(string1));
// console.log(initCap(string2));
// ---------------------------------------------
// 3. Задан массив phones, передающий элемент HTML разметки.
// Создайте функцию clearDataCards(array), которая будет получать в качестве аргумента массив и реализует очистку данных. Каждый номер карты нужно переопределить, заменив первые и последние 4 цифры на звездочки
// по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):

// let cards = [
// '4000 0012 0056 9499',
// '4000 0013 5456 7379',
// '4000 0014 1456 9869',
// '4000 0015 3466 7859',
// '4000 0016 3556 6899',
// '4000 0017 4456 4699'
// ]

// clearDataCards(cards)

// Результат
//  [
// '****0012 0056****,
// '****0013 5456****',
// '****0014 1455****,
// '****0015 3466****,
// '****0016 3556****,
// '****0017 4456****’
// ]

// ----------Решение----------------
// let cards = [
// '4000 0012 0056 9499',
// '4000 0013 5456 7379',
// '4000 0014 1456 9869',
// '4000 0015 3466 7859',
// '4000 0016 3556 6899',
// '4000 0017 4456 4699'
// ]

// function clearDataCards(array){

// let newCards = [];
// for (let i = 0; i < array.length; i++) {

//     let newStart = array[i].slice(0,4);
//     let newEnd = array[i].slice(-4);
//     let middle = array[i].slice(5,14);
//     newStart = "****"
//     newEnd = "****";
//     let result = (newStart+middle+newEnd);
//     newCards.push(result);

// } return newCards;
// }
// console.log(clearDataCards(cards));
//-----------------------------------------

// 4. Задан массив elems, передающий элемент HTML разметки.
// Создайте функцию clearData(array), которая будет получать в качестве аргумента массив и реализует очистку данных по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):

// let elems = [
// '<div><p class="text">Home</p></div>',
// '<div><p class="text">About</p></div>',
// '<div><p class="text">FAQ</p></div>',
// '<div><p class="text">Contacts</p></div>'
// ]

// clearData(array)

// 	Результат: ['Home','About','FAQ','Contacts']

// ----------Решение----------------
// let elems = [
//   '<div><p class="text">Home</p></div>',
//   '<div><p class="text">About</p></div>',
//   '<div><p class="text">FAQ</p></div>',
//   '<div><p class="text">Contacts</p></div>',
// ];

// function clearData(array) {
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     let newElem = array[i].slice(
//       array[i].indexOf('">') + 2,
//       array[i].indexOf("</")
//     );
//     newArray.push(newElem);
//   }
//   return newArray;
// }
// console.log(clearData(elems));
