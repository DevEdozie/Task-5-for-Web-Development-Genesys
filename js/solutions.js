"use strict";

/*

1. Create a function that will be able to convert figures from Fahrenheit to
Celsius.

*/

const convFahrToCel = function (fahr) {
  const cel = ((fahr - 32) * 5) / 9;
  return `${fahr}F => ${cel}C`;
};

// console.log(convFahrToCel(1));

/*
2. Create a function that will calculate the average of numbers in an array.
*/

let average = 0;
const calcAverage = function (numbers) {
  numbers.forEach((number) => (average += number / numbers.length));

  return average;
};

// console.log(calcAverage([10, 2, 3, 4]));

/*
3. Create a function that checks if a number, n is divisible by two numbers x and y.
All inputs are positive, non-zero digits.
*/

const isAFactor = function (n, x, y) {
  if (n % x === 0 && n % y === 0) {
    console.log(`${x} and ${y} are factors of ${n}`);
  } else {
    console.log("Not a factor");
  }
};

// isAFactor(10, 5, 2);

/*
4. Create a function that will output the first 100 prime numbers.
*/

const printFirst100Prime = function () {
  const listPrime = [];
  //   let factors = 0;
  let div = 0;

  for (let i = 1; i <= 1000; i++) {
    // console.log(`I: ${i}`);
    let factors = 0;
    for (let j = 1; j <= 1000; j++) {
      //   console.log(`J: ${j}`);
      //
      div = i % j;
      //   console.log(`Div: ${div}`);
      if (div === 0) {
        factors += 1;
      }
      //
    }
    if (factors < 3) {
      listPrime.push(i);
    }
  }

  console.log(listPrime);

  // Print the first 100 prime numbers
  //   console.log("The first 100 prime numbers>>>");
  //   for (let i = 0; i < 100; i++) {
  //     console.log(listPrime[i]);
  //   }
};

printFirst100Prime();

/*
5. Create a function that will return a boolean specifying if a number is a
prime number.
*/

const checkIfPrime = function (number) {
  let div = 0;
  let isPrime = false;
  let factors = 0;

  // Loop from one till the number
  for (let i = 1; i <= number; i++) {
    // Check remainder
    div = number % i;
    if (div === 0) {
      factors++;
    }
  }

  // Check if number has less than 3 factors ( 2 Factors)
  if (factors < 3) {
    isPrime = true;
  }

  return isPrime;
};

console.log(checkIfPrime(18));

/*
6. Create a function that receives an array of numbers of diverse numbers
and returns an array containing only positive numbers.
*/

const retPos = (numbers) => numbers.filter((number) => number > 0);

// console.log(retPos([-1, 23, 3, 4, 8, -1, 4]));

/*
7. Write a program that prints the numbers from 1 to 100. But for multiples of 3
prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For
numbers which are multiples of both 3 and 5 prints "FizzBuzz".
*/

const printFizzBuzz = function () {
  for (let i = 0; i < 100; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
};

// printFizzBuzz();

/*
8. The marketing team is spending way too much time typing in hashtags. Let’s
create a hashtag generator for them, our hashtag generator will meet the
following criteria;
● It must start with a hash symbol, #.
● Ignore all spaces in the input.
● All words must have their first letter capitalized.
● If the final result is going to be longer than 140 characters, it should return
false.
● If the input or result is an empty string, it should return false.
*/

const hashTagGen = function (input) {
  // Split the input
  let splitInput = input.split(" ");
  // Add the # symbol
  splitInput.unshift("#");
  // Remove all whitespace in the array
  // Capitalize all first letters
  // Reduce
  const newArray = splitInput
    .filter((value) => value.length > 0)
    .map((value) => value.replace(value[0], value[0].toUpperCase()))
    .reduce((acc, val) => acc + val);

  console.log(newArray.length);

  // If
  if (newArray.length > 140 || newArray.length === 0) {
    return false;
  } else {
    return newArray;
  }
};

// console.log(
//   hashTagGen(
//     "dgdfdhf v    ljgdgd    hkgkhgs jkgkhg gjgkyu jkhk vvkh vvkh jvk vg vhjgk jgkg hg khgkg khgk kjgkg jgbkhgkb  gjkkg jggkjvdghs     ghjggdanbvjk return newArray;  no   is not a string"
//   )
// );
