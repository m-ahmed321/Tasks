function polygon(n) {
  let output = Math.pow(n, 2) + Math.pow(n - 1, 2);
  return output;
}

n = 4;

console.log(polygon(n));
