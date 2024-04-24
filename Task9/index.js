const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

// can also be done by using this method
// const fruitCounts = new Map();

// for (const fruit of fruitBasket) {
//   fruitCounts.set(fruit, (fruitCounts.get(fruit) || 0) + 1);
// }
// console.log(fruitCounts);

const count = [];
for (const fruit of fruitBasket) {
  if (count[fruit]) {
    count[fruit]++;
  } else {
    count[fruit] = 1;
  }
}
console.log(count);
