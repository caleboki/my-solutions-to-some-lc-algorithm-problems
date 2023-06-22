// https://leetcode.com/problems/video-stitching

/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
    let res = 0, st = 0, end = 0
    
    clips.sort((a, b) => {return a[0] - b[0]})
    
    for (let i = 0; st < time; st = end, res++) {
        
        while (i < clips.length && clips[i][0] <= st) {
            end = Math.max(end, clips[i][1])
            i++
        }
        if (st === end) return -1
        
    }
    return res
    
};