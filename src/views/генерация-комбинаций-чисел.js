let factsRow = [];
let allSumm = [];
const initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const N = initialArray[initialArray.length - 1];
//   массив всех возможныъ комбинаций(массивов)
const compliteSet = [];

function factorial(n, result) {
  result = result || 1;
  if (!n) {
    return result;
  } else {
    return factorial(n - 1, result * n);
  }
}

function algoritm(dlinna) {
  let targetArray = [];
  for (let i = 0; i < dlinna; i++) {
    targetArray.push(initialArray[i])
  }
  compliteSet.push(targetArray.slice());
  const initArray = targetArray.slice();

  let step = 0;
  for (let i = dlinna; i > 0; i--) {
    ++step;
    targetArray = initArray.slice();

    // текущий элемент движения < возможного
    while (targetArray[i - 1] < (N - dlinna + i)) {
      for (let indx = 0; indx < step; indx++) {
        targetArray[i - 1 + indx] += 1;
      }
      compliteSet.push(targetArray.slice());
    }
  }
}

function strong(num) {

  compliteSet.forEach((e) => {
    factsRow.push(
      e.map(x => {
        return factorial(x);
      })
    )
  });

  factsRow.forEach(e => {
    allSumm.push(e.reduce((a, b) => { return a + b }));
  })

  return allSumm.some(elem => elem === num) ? "STRONG!!!!" : "Not Strong !!";
}

algoritm(1);
algoritm(2);
algoritm(3);
algoritm(4);
algoritm(5);
algoritm(6);
algoritm(7);
algoritm(8);
algoritm(9);

strong(12)