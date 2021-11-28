"use strict";

/*************** Задача №1 ***************/
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0(for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

/* моё самое самое тупейшее решение */
// function solution(number) {
//   let sum = 0;
//   if (number < 0) {
//     return 0;
//   }
//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0) {
//       sum += i;
//       continue;
//     }
//     if (i % 5 === 0) {
//       sum += i;
//       continue;
//     }
//   }
//   return sum;
// }

/* прикольное решение с двумя тернарными и созданием массива */
// const solution = (n) =>
//   n <= 0
//     ? 0
//     : Array.from({ length: n }, (_, i) =>
//         i % 3 === 0 || i % 5 === 0 ? i : 0
//       ).reduce((acc, y) => acc + y);

/* решение через цикл и интересным условием */
// const solution = (n) => {
//   let s = 0;
//   for (let i = 0; i < n; i++) s += i % 3 ? (i % 5 ? 0 : i) : i;
//   return s;
// };

/* решение с шаговым проходом по значениям, это пздц (с) Дмитрий */
// function solution(number) {
//   var all = [];

//   function multiples(multiple) {
//     for (var m = multiple; m < number; m += multiple)
//       if (all.indexOf(m) === -1) all.push(m);
//   }
//   multiples(3);
//   multiples(5);

//   return all.reduce((a, b) => a + b, 0);
// }

/* простое решение со стрелкой */
// const solution = (number) => {
//   let summ = 0;
//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) summ += i;
//   }
//   return summ;
// };

// console.log(solution(10));

/*************** Задача №2 ***************/
// Complete the method / function so that it converts dash / underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was
// capitalized(known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

/* самый инвалидный способ */
// function toCamelCase(str) {
//   const arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "-" || arr[i] === "_") {
//       arr[i + 1] = arr[i + 1].toUpperCase();
//       arr[i] = "";
//     }
//   }
//   return arr.join("");
// }

// /* самый инвалидный способ только через форЫч */
// const toCamelCase = (str) => {
//   const arr = str.split("");
//   arr.forEach((value, indx, array) => {
//     if (value === "-" || value === "_") {
//       array[indx + 1] = array[indx + 1].toUpperCase();
//       array[indx] = "";
//     }
//   });
//   return arr.join("");
// };

// const toCamelCase = (str) =>
//   str
//     .split("-")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");

// const toCamelCase = (str) =>
//   str
//     .split("")
//     .map((elem) => (elem === "-" || elem === "_" ? "+" : elem))
//     .join("")
//     .split("+")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");

// function toCamelCase(str) {
//   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }

// const toCamelCase = (str) =>
//   str
//     .split(/[^a-zA-Z0-9]/)
//     .map((el, i) => (i ? el[0].toUpperCase() + el.substring(1) : el))
//     .join("");

// const toCamelCase = (str) =>
//   str
//     .split(/[^a-z]/i)
//     .map((word, index) =>
//       index > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
//     )
//     .join("");

// const toCamelCase = (str) =>
//   str.replace(/(-|_)([a-zA-Z])/gi, (m, p1, p2) => p2.toUpperCase());

// function toCamelCase(str) {
//   return str
//     .split(/[-,_]/)
//     .map((substr, i) => {
//       if (i === 0) return substr;
//       return substr.charAt(0).toUpperCase() + substr.slice(1);
//     })
//     .join("");
// }

// console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
// console.log(toCamelCase("a-b-c")); // "aBC"
// console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"

/* разные формы записи функцй */

// function fn1() {
//   // тело функуии...
// }

// var fn2 = function () {
//   // тело функции...
// };

// const fn3 = () => {
//   // тело функции...
// };

// function fn4(params) {
//   //
// }

/* 18/11/2021 */

/*****Задача №1*****/
// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// function createPhoneNumber(numbers) {
//   return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
// }

// const createPhoneNumber = (numbers) =>
//   `(${numbers.splice(0, 3).join("")}) ${numbers.splice(0, 3).join("")}-${numbers
//     .splice(0, 4)
//     .join("")}`;

// const createPhoneNumber = (numbers) =>
//   `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers
//     .slice(6)
//     .join("")}`;

// const createPhoneNumber = (numbers) =>
//   numbers.join("").replace(/(....)(..*)()/, "($1) $2-$3");

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"

/*****Задача №2*****/
// In this kata you will create a function that takes
// a list of non - negative integers and strings and returns
// a new list with the strings filtered out.

// filter_list([1, 2, "a", "b"]) == [1, 2];
// filter_list([1, "a", "b", 0, 15]) == [1, 0, 15];
// filter_list([1, 2, "aasf", "1", "123", 123]) == [1, 2, 123];

// const filter_list = (l) => l.filter((v) => typeof v === "number");

// console.log(filter_list([1, 2, "a", "b"]));
// console.log(filter_list([1, "a", "b", 0, 15]));
// console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

/*****Задача №3*****/
// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones--
// everytime you press the button it sends you an array of one - letter strings representing directions to walk(eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter(direction) and you know it takes you one minute to traverse one city block,
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes(you don't want to be early or late!)
// and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters('n', 's', 'e', or 'w' only).
// It will never give you an empty array(that's not a walk, that's standing still!).

// const isValidWalk = (walk) => {
//   if (walk.length !== 10) {
//     return false;
//   }

//   const route = [0, 0];

//   for (const wal of walk) {
//     switch (wal) {
//       case "n":
//         route[0] += 1;
//         break;
//       case "s":
//         route[0] -= 1;
//         break;
//       case "e":
//         route[1] += 1;
//         break;
//       case "w":
//         route[1] -= 1;
//         break;
//     }
//   }

//   if (route[0] === 0 && route[1] === 0) {
//     return true;
//   }
//   return false;
// };

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
// console.log(
//   isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
// ); // false
// console.log(isValidWalk(["w"])); // false
// console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // false
// console.log(isValidWalk(["n", "e", "s", "s", "w", "w", "n", "n", "e", "s"])); // true

/* 20/11/2021 */
// **********sol.1
// Напишите цикл,  выводит такой треугольник.

// const fn = (a) => {
//   let b = "#";
//   for (let i = 0; i < a; i++) {
//     console.log(b);
//     b += "#";
//   }
// };

// fn(7);

// **********sol.2
// Напишите программу, которая выводит через console.log все числа от 1 до 100,с двумя исключениями.
// Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5(но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.

// const fn = (a) => {
//   for (let i = 0; i <= a; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//       continue;
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//       continue;
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//       continue;
//     }
//     console.log(i);
//   }
// };

// const fn = (a) => {
//   for (let i = 1; i <= a; i++) {
//     console.log(
//       i % 3 === 0 && i % 5 === 0
//         ? "FizzBuzz"
//         : i % 3 === 0
//         ? "Fizz"
//         : i % 5 === 0
//         ? "Buzz"
//         : i
//     );
//   }
// };

// fn(100);

// **********sol.3
// Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
// На каждой позиции либо пробел, либо #.
// В результате должна получиться шахматная доска.

// const fn = () => {
//   for (let i = 0; i < 8; i++) {
//     console.log(i % 2 === 0 ? "# # # # " : " # # # #");
//   }
// };

// let fn3 = "";
// for (let i = 0; i < 8; i++) {
//   fn3 +=
//     "# ".repeat(4).split("")[i & 1 ? "reverse" : "slice"]().join("") + "\n";
// }
// console.log(fn3);

// fn();

// sol.4
// Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

// const fn = (a, b) => {
//   console.log(Math.min(a, b));
// };

// const fn = (a, b) => {
//   if (a > b) {
//     console.log(b);
//   } else {
//     console.log(a);
//   }
// };

// const fn = (a, b) => {
//   console.log(a > b ? b : a);
// };

// fn(0, 10); // 0
// fn(0, -10); // -10

// **********sol.5
// Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N - 2.
// Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение.
// Потестируйте её на 50 и 75. Попробуйте задать ей - 1. Почему она ведёт себя таким образом ? Можно ли её как - то исправить ?

// моё решение 0о
// const fn = (a) => (a % 2 === 0 ? true : false);

// решение Наташи
// const fn = (a) => (a === 0 ? true : fn1(a - 2));
// const fn1 = (a) => (a === 1 ? false : fn(a - 2));

// решение из учебника
// function fn(n) {
//   if (n === 0) return true;
//   else if (n === 1) return false;
//   else if (n < 0) return fn(-n);
//   else return fn(n - 2);
// }

// console.log(fn(50));
// console.log(fn(75));
// console.log(fn(-1));

// **********sol.6
// Символ номер N строки можно получить, добавив к ней .charAt(N) ( “строчка”.charAt(5) )
// – схожим образом с получением длины строки при помощи.length.
// Возвращаемое значение будет строковым, состоящим из одного символа(к примеру, “к”).
// У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1.
// Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.
// Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.
// Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ,
// который мы будем искать в строке(вместо того, чтобы просто считать количество символов “B”).
// Для этого переделайте функцию countBs.

// часть вторая задачи
// const fn = (text, a) =>
//   text.split("").reduce((acc, value) => (value === a ? acc + 1 : acc), 0);

// console.log(fn("mommy washed the frame at school", "m"));

// а теперь мы попробуем поискать по кол-ву букв
// const fn = (text, n) => {
//   const obj = text
//     .split("")
//     .filter((value) => value !== " ")
//     .reduce((acc, tag) => {
//       return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//       };
//     }, {});

//   for (const k of Object.keys(obj)) {
//     if (obj[k] === n) {
//       return k;
//     }
//   }
// };

// console.log(fn("mommy washed the frame at school", 4));

// часть вторая задачи по учебнику
// let result = "";
// function countChar(b, n) {
//   for (var i = 0; i < b.length; i++) {
//     if (b.charAt(i) == n) {
//       result += b.charAt(i);
//     }
//   }
//   console.log(result.length);
// }

// countChar("mommy washed the frame at school", "m");

// ********** задача с 'codewars'
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints;
// 0 <= input.length <= 100;

// прошел но не все решения =(
// const validParentheses = (parens) =>
//   0 <= parens.length <= 100 &&
//   parens.split("").filter((c) => c === "(").length ===
//     parens.split("").filter((c) => c === ")").length;

// решение Наташи
// const validParentheses = (parens) => {
//   let count = 0;
//   for (let i = 0; i < parens.length && count >= 0; i += 1) {
//     count += parens[i] === "(" ? 1 : -1;
//   }
//   return 0 <= parens.length <= 100 && count === 0;
// };

// пример из кодварса
// function validParentheses(parens) {
//   var re = /\(\)/;
//   while (re.test(parens)) parens = parens.replace(re, "");
//   return !parens;
// }

// function validParentheses(parens) {
//   while (parens.indexOf("()") != -1) {
//     parens = parens.replace("()", "");
//   }
//   return !parens.length;
// }

// function validParentheses(parens) {
//   return [...parens].reduce((a, c) => (a + c).replace("()", "")) == ""
//     ? true
//     : false;
// }

// console.log(validParentheses("()")); // *true
// console.log(validParentheses("())")); // !false
// console.log(validParentheses("())(")); // !false
// console.log(validParentheses("(())()")); // *true
// console.log(validParentheses("()(())(((())))")); // *true
// console.log(validParentheses("())((())(((())))")); // !false
// console.log(validParentheses("()()((())()())(())()()()()()(())")); // *true

/***** Задача 28/11/2021 03:50 *****/
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters.
// For example:
// "abba" & ("baab" == true);
// "abba" & ("bbaa" == true);
// "abba" & ("abbba" == false);
// "abba" & ("abca" == false);
// Write a function that will find all the anagrams of a word from a list.
// You will be given two inputs a word and an array with words.
// You should return an array of all the anagrams or an empty array if there are none.
// For example:

// моё решение длинное
// function anagrams(word, words) {
//   const result = [];
//   const original = word.split("").sort().join("");
//   for (const arr of words) {
//     if (original === arr.split("").sort().join("")) {
//       result.push(arr);
//     }
//   }
//   return result;
// }

// Самая короткая запись
// let anagrams = (word, words) =>
//   words.filter(
//     (w) => w.split("").sort().join("") === word.split("").sort().join("")
//   );

// console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); // ['aabb', 'bbaa']
// console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); // ['carer', 'racer']
// console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); // []

/*****28/11/2021*****/

// task 1
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// моё решение
// const moveZeros = (arr) => {
//   const brr = arr.filter((a) => a !== 0);

//   arr.forEach((e) => {
//     if (e === 0) {
//       brr.push(e);
//     }
//   });

//   return brr;
// };

// короткое красивое решение
// const moveZeros = (arr) => [
//   ...arr.filter((val) => val !== 0),
//   ...arr.filter((val) => val === 0),
// ];

// обратный reduce()
// const moveZeros = (arr) =>
//   arr.reduceRight(
//     (acc, val) => (val === 0 ? [...acc, val] : [val, ...acc]),
//     []
//   );

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false,1,1,2,1,3,"a",0,0]

// task 2
// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been,
// and now they want to show Charlie their entire collection.However, Charlie doesn't like these sessions, since the motive usually repeats.
// He isn't fond of seeing the Eiffel tower 40 times.He tells them that he will only sit during the session if they show the same motive at most N times.
// Luckily, Alice and Bob are able to encode the motive as a number.
// Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order ?
// Task
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering.
// For example if N = 2, and the input is[1, 2, 3, 1, 2, 1, 2, 3], you take[1, 2, 3, 1, 2],
// drop the next[1, 2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to[1, 2, 3, 1, 2, 3].

// моё решение
// const deleteNth = (arr, n) =>
//   arr.reduce(
//     (acc, val) =>
//       acc.includes(val)
//         ? acc.filter((e) => e === val).length > n - 1
//           ? [...acc]
//           : [...acc, val]
//         : [...acc, val],
//     []
//     );

// надо бы разобрать
// function deleteNth(arr, x) {
//   var cache = {};
//   return arr.filter(function (n) {
//     cache[n] = (cache[n] || 0) + 1;
//     return cache[n] <= x;
//   });
// }

// console.log(deleteNth([1, 1, 1, 1], 2)); // [1,1]
// console.log(deleteNth([20, 37, 20, 21], 1)); // [20,37,21]
// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]
// console.log(
//   deleteNth([36, 11, 41, 41, 11, 12, 11, 11, 12, 41, 11, 11, 12, 12, 25, 11], 6)
// ); // [36, 11, 41, 41, 11, 12, 11, 11, 12, 41, 11, 11, 12, 12, 25]
