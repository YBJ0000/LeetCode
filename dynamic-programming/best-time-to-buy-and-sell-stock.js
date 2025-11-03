/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    /*
    Create two variables to store minimum price so far and maximum profit so far
    Iterate through the `prices`:
        - If today's price is less than the `minPrice`, update the `minPrice`
        - If today's profit is higher than the `maxProfit`, update the `maxProfit`
    Return the maximum profit
    */


    let minPrice = Infinity
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    }

    return maxProfit
    
};