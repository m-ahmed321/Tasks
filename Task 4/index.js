for (let i = 1; i <= 5; i++) {
  let line = "";

  for (let j = 5; j > i; j--) {
    line += ".";
  }
  for (let k = 1; k <= i; k++) {
    line += i;
  }
  console.log(line);
}
