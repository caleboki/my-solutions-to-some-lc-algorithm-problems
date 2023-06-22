// https://leetcode.com/problems/the-latest-time-to-catch-a-bus

/**
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */
// var latestTimeCatchTheBus = function(buses, passengers, capacity) {
//     buses.sort((a, b) => a-b)
//     passengers.sort((a, b) => a-b)

//     let j = 0, spots = capacity, currentPassenger, latest = passengers[0]

//     for (let i = 0; i < buses.length; i++) {
//         while (spots > 0) {
//             if (passengers[i] > buses[i]) {
//                 break
//             }
//             currentPassenger = passengers[j]
//             latest = Math.max(latest, currentPassenger)
//             j++
//             spots--
//         }
//         spots = capacity
//     }
//     return latest-1
// };

// var latestTimeCatchTheBus = function(buses, pass, cap) {
//     buses = buses.sort((a,b) => a-b);
//     pass = pass.sort((a,b) => a-b);
//     let p = 0;
//     for(let b = 0; b < buses.length; b++) {
//         let c = 0;
//         while(p < pass.length && pass[p] <= buses[b] && c < cap) {
//             p++;
//             c++;
//         }
//         if(b === buses.length-1){
//             let t = (c === cap)? (pass[--p] -1) : buses[b];
//             while(p>0 && pass[--p] === t){
//                 t--
//             }
//             return t;
//         }
//     }
//     return -1;
// };

var latestTimeCatchTheBus = function(buses, passengers, capacity) {
    buses = buses.sort((a,b) => a-b);
    passengers = passengers.sort((a,b) => a-b);
    let p = 0;
    for (let b of buses) {
        let c = 0;
        while (p < passengers.length && passengers[p] <= b && c < capacity) {
            p++;
            c++;
        }
        if (b === buses[buses.length-1]){
            let t = (c === capacity) ? (passengers[--p] - 1) : buses[buses.length-1];
            while (p > 0 && passengers[--p] === t) {
                t--;
            }
            return t;
        }
    }
    return -1;
};







