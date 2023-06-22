// https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden

/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    let taps = []
    
    for (let i in ranges) {
        let interval1 = Number(i) - Number(ranges[i])
        let interval2 = Number(i) + Number(ranges[i])
        
        taps.push([interval1, interval2])
    }
    taps.sort((a, b) => a[0] - b[0]);
    
    const getIntervals = (taps, n) => {
        let result = 0, start = 0, end = 0
        
        for (let i = 0; start < n; start = end, result++) {
            while(i < taps.length && taps[i][0] <= start) {
                end = Math.max(end, taps[i][1])
                i++
            }
            if (start === end) return -1
        }
        return result
        
    }
    return getIntervals(taps, n)
};

// var videoStitching = function(clips, time) {
//     let res = 0, st = 0, end = 0
    
//     clips.sort((a, b) => {return a[0] - b[0]})
    
//     for (let i = 0; st < time; st = end, res++) {
        
//         while (i < clips.length && clips[i][0] <= st) {
//             end = Math.max(end, clips[i][1])
//             i++
//         }
//         if (st === end) return -1
        
//     }
//     return res
    
// };