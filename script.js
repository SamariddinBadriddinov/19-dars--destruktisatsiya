"use strict";

const person = {
  name: "Samar", // data-type: string
  lastName: "Badriddinov",
  age: 19, // data-type: number
  wishes: [], // array
  language: function () {}, // funksiyalar
  mother: {
    name: "name",
  },
};

const obj = {
  name: "div",
  width: 400,
  height: 400,
  colors: {
    border: "crimson",
    bg: "coral",
  },
};

console.log(Object.keys(obj).length);

// console.log(obj);
// delete obj.name;
// console.log(obj);

let counter = 0;

for (let key in obj) {
  if (typeof obj[key] == "object") {
    for (let i in obj[key]) {
      console.log(`Property ${key} value ${obj[key][i]}`);
    }
  } else {
    console.log(`Property ${key} value ${obj[key]}`);
  }
}

console.log(counter);

const newMethod = {
  makeExample: function () {
    console.log("Your first method");
  },
};
newMethod.makeExample();

const options = {
  colors: {
    bg: "crimson",
    border: "coral",
  },
};

const { bg, border } = options.colors;

console.log(bg);
