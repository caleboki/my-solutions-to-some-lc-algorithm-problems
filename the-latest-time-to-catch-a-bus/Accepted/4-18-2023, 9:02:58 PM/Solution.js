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

function latestTimeCatchTheBus(buses, passengers, capacity) {
    // Sort the arrays in ascending order
    buses = buses.sort((a, b) => a - b);
    passengers = passengers.sort((a, b) => a - b);
    
    let passengerIndex = 0;
    for (let busIndex = 0; busIndex < buses.length; busIndex++) {
        let passengersOnBus = 0;
        while (passengerIndex < passengers.length && passengers[passengerIndex] <= buses[busIndex] && passengersOnBus < capacity) {
            // Count the number of passengers who can get on the current bus
            passengerIndex++;
            passengersOnBus++;
        }
        
        if (busIndex === buses.length - 1) {
            // If this is the last bus, calculate the latest time to catch it
            let latestArrivalTime = (passengersOnBus === capacity) ? (passengers[--passengerIndex] - 1) : buses[busIndex];
            
            // Check if there are any passengers who arrived at the latest arrival time
            while (passengerIndex > 0 && passengers[passengerIndex - 1] === latestArrivalTime) {
                latestArrivalTime--;
                passengerIndex--;
            }
            
            return latestArrivalTime;
        }
    }
    
    // If all buses have been checked and no bus can be caught, return -1
    return -1;
}








