let year1 = 2000;
let year2 = 2001;

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

console.log(centuryFromYear(year1));
console.log(centuryFromYear(year2));
