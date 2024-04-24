const arr = [-4, 3, -9, 0, 4, 1];

function ratio(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (const num of arr) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }
  const totalElements = arr.length;

  const positiveRatio = (positiveCount / totalElements).toFixed(6);
  const negativeRatio = (negativeCount / totalElements).toFixed(6);
  const zeroRatio = (zeroCount / totalElements).toFixed(6);

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}

ratio(arr);
