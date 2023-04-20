const verifyNumber = (num, number) => num === number;

const lotteryDraw = (num, callback) => {
  const number = Math.floor(Math.random() * (6 - 1) + 1);
  
  return callback(num, number) ? 'Parabéns, você ganhou!' : 'Tente novamente';
}

console.log(lotteryDraw(4, verifyNumber));