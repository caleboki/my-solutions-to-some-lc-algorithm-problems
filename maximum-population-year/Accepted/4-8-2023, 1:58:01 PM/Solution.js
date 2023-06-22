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

// To find the earliest year with the maximum population, we need to iterate over all years and count the number of people alive in each year. We can do this by iterating over the given logs array and constructing a yearCounts object that stores the count of people alive in each year.

// For each person in logs, we iterate over the range from their birth year to their death year (excluding the year they die) and increment the count for each year in yearCounts. Once we have the yearCounts object, we can iterate over its keys to find the year(s) with the maximum population.

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