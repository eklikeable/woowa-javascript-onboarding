function problem5(money) {
  const currencies = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let result = [];
  for (let currency of currencies) {
    let numberOfTheCurrency = Math.floor(money / currency);
    result.push(numberOfTheCurrency);
    money = money - currency * numberOfTheCurrency;
  }
  return result;
}

module.exports = problem5;