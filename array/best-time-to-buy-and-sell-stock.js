/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

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



    /*
    Using a double loop will exceed the time limit.
    */

    // let current_max = 0

    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         if ((prices[j] - prices[i]) > current_max) {
    //             current_max = prices[j] - prices[i]
    //         }
    //     }
    // }

    // return current_max
    
};