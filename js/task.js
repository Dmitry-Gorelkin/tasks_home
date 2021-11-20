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
