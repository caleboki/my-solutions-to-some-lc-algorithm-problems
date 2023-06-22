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

function latestTimeCatchTheBus(buses, passengers, capacity) {
  buses = buses.sort((a, b) => a - b);
  passengers = passengers.sort((a, b) => a - b);

  let passengerIndex = 0;
  for (let busIndex = 0; busIndex < buses.length; busIndex++) {
    let passengersOnBus = 0;
    while (passengerIndex < passengers.length && passengers[passengerIndex] <= buses[busIndex] && passengersOnBus < capacity) {
      passengerIndex++;
      passengersOnBus++;
    }
    if (busIndex === buses.length - 1) {
      let latestTime = (passengersOnBus === capacity) ? (passengers[--passengerIndex] - 1) : buses[busIndex];
      while (passengerIndex > 0 && passengers[passengerIndex - 1] === latestTime) {
        passengerIndex--;
        latestTime--;
      }
      return latestTime;
    }
  }
  return -1;
}







