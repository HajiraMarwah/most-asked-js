function maxProfitSingle(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) minPrice = price;
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}

console.log(maxProfitSingle([7,1,5,3,6,4])); // Output: 5

// for multiple
function maxProfitMultiple(prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
}

console.log(maxProfitMultiple([7,1,5,3,6,4])); // Output: 7
