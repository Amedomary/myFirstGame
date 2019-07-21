// https://www.codewars.com/kata/5a4d303f880385399b000001/solutions/javascript

function factorial(n, result) {
  result = result || 1;
  if (!n) {
    return result;
  } else {
    return factorial(n - 1, result * n);
  }
}

function strong(num) {
  let sepNum = String(num).split('');
  sepNum = sepNum.map(e => {
    return factorial(parseInt(e));
  });
  const factNum = parseInt(sepNum.reduce((a, b) => { return a + b }))

  return factNum === num ? "STRONG!!!!" : "Not Strong !!";
}
