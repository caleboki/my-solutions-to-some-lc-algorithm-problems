// https://leetcode.com/problems/time-needed-to-buy-tickets

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let count = 0, i= 0
    
    while(tickets[k] > 0) {
        
        if (tickets[i] > 0) {
            tickets[i]--
            count++
        }
        
        if (tickets[k] === 0) break
        
        i = ++i%tickets.length
        
    }
    
    return count
    
};


// var timeRequiredToBuy = function(tickets, k) {
//     let count = 0, i = 0;
//     while (tickets[k] !== 0) {
//         if (tickets[i] !== 0) {
//             tickets[i] -= 1
//             count++;
//         }
//         if (tickets[k] === 0) {
//             break;
//         }
//         i = (++i)%tickets.length
//     }
    
//     return count
// };