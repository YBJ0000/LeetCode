/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let current_max = 0

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if ((prices[j] - prices[i]) > current_max) {
                current_max = prices[j] - prices[i]
            }
        }
    }

    return current_max
    
};