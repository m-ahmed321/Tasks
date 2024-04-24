const input = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

function rotate(input, k) {
  for (let i = 0; i < k; i++) {
    const lastElement = input.pop();
    input.unshift(lastElement);
  }
  return input;
}

console.log(`Input: ${input}`);
console.log(`k: ${k}`);
console.log(`Output: ${rotate(input, k)}`);
