let arr = [3, 6, -2, -5, 7, 3];
function product(arr) {
  let maxProduct = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const currentProduct = arr[i] * arr[i + 1];
    maxProduct = Math.max(maxProduct, currentProduct);
  }
  return maxProduct;
}

const output = product(arr);
console.log(output);
