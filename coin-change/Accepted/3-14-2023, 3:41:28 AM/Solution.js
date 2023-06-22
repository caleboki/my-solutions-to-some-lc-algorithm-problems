// https://leetcode.com/problems/coin-change

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {

//     const dp = (coins, amount, memo = new Map()) => {
//         if (memo.has(amount)) return memo.get(amount)
//         if (amount === 0) return []
//         if (amount < 0) return null

//         let shortestCombination = null

//         for (let coin of coins) {
//             let rem = amount - coin
//             let remResult = coinChange(coins, rem, memo)

//             if (remResult) {
//                 let combination = [...remResult, coin]

//                 if (!shortestCombination || shortestCombination.length > combination.length) {
//                     shortestCombination = combination
//                 }
//             }
//         }

//         memo.set(amount, shortestCombination)
//         return shortestCombination !== null ? shortestCombination.length : -1
//     }

//     dp(coins, amount)
// };

const coinChange = (coins, amount) => {
  const memo = new Map();

  const dp = (rem) => {
    if (memo.has(rem)) return memo.get(rem);
    if (rem < 0) return -1;
    if (rem === 0) return 0;

    let min = Number.MAX_VALUE;

    for (let coin of coins) {
      let subProblem = dp(rem - coin);
      if (subProblem === -1) continue;
      min = Math.min(min, subProblem + 1);
    }

    memo.set(rem, min === Number.MAX_VALUE ? -1 : min);
    return memo.get(rem);
  };

  return dp(amount);
};


