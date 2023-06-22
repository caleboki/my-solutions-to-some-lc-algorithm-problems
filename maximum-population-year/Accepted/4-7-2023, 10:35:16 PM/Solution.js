// https://leetcode.com/problems/maximum-population-year

/**
 * @param {number[][]} logs
 * @return {number}
 */
// var maximumPopulation = function(logs) {
//     logs.sort(function(a, b){return a[0] - b[0]})
//     console.log(logs)
//     let earliest = logs[0][0]

//     for (let i = 1; i < logs.length; i++) {
//         let [birth, death] = logs[i]
//         let [prevBirth, prevDeath] = logs[i-1]
        
//         if (birth < prevDeath) {
//             if (prevBirth < birth) earliest = prevBirth
//         }
//     }

//     return earliest
// };

const maximumPopulation = (logs) => {
    const yearCounts = {}

    // iterate over logs to populate yearCounts
    for (let [birth, death] of logs) {
        for (let year = birth; year < death; year++) {
            yearCounts[year] = (yearCounts[year] || 0) + 1
        }
    }

    // iterate over yearCounts to find the year(s) with the maximum population
    let maxYear = -1, maxCount = -1
    for (let [year, count] of Object.entries(yearCounts)) {
        if (count > maxCount || (count === maxCount && year < maxYear)) {
            maxYear = year
            maxCount = count
        }
    }

  return parseInt(maxYear)
}