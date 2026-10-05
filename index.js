// console.log("Helloooooo")
// console.log(a)
// var a=5;

// console.log(b)
// let b=10;
// =======1============================================
let name = "Carol";
let age = 24;
let city = "Sohag";

console.log(`My name is ${name} and my age is ${age} and my city is ${city}`);
// ===================2========================
function isEven(n) {
  if (n % 2 == 0) {
    return true;
  }
}

console.log(isEven(4));
// ====================3==============================
function max(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(max(15, 10, 20));
// ======================4=========================
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("Carol"));
// =====================5=================================

function countVowels(strr) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < strr.length; i++) {
    if (vowels.includes(strr[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("caroleen"));

// =====================6================================
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(25);

// =====================7=======================
let iseven = (n) => (n % 2 == 0 ? "even" : "");

console.log(iseven(8));

// ========================8==========================
function sum(...numbers) {
  let plus = 0;
  for (let i = 0; i < numbers.length; i++) {
    plus += numbers[i];
  }
  return plus;
}

console.log(sum(1, 2, 3, 4, 5, 6));
// ===========================9===========================
function greet(name = "guest") {
  console.log(`Hello ${name}`);
}
greet("Caroline");
greet();

// ==============================10============================
console.log(0 || "default");
console.log(0 ?? "default");
console.log("5" == 5, "5" === 5);

// ================================practice===========================

function isPlaindrom(str) {
  let bool = false;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPlaindrom("madam"));
