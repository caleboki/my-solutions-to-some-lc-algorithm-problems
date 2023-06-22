// https://leetcode.com/problems/race-car

/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
    //This problem suggest a bfs at it is use to find the shortest distance between two points
    
    let arr = [{moves: 0, position: 0, speed: 1}] //initial conditions
    let best = Infinity
    
    while (arr.length) {
        let {moves, position, speed} = arr.shift()
        
        if (position === target) best = Math.min(best, moves)
        if (moves >= best) continue
        
        //move foward
        arr.push({moves: moves + 1, position: position + speed, speed: 2*speed})
        
        //if we have offshot target or in the wrong direction
        if ((position + speed > target && speed > 0) || (position + speed < target && speed < 0)) {
            arr.push({moves: moves + 1, position: position, speed: speed > 0 ? -1 : 1})
        }
        
    }
    return best
};

//Time and Space complexity:
// This isn't a precise and formal answer but it will be something similar to time: O(2^N), space: O(N).

// Time is like that because we (theoretically) switch down two decision paths for each N. In practice this figure is for a theoretical worst case which cannot actually be reached but I am not sure how to represent that unreachability using a mathematical formula - I think most interviewers would expect and accept O(2^N) here if they asked.

// Space is like that because we are shrinking the stack at the same rate as we grow it and we reach the solution in a sensibly bounded time. Even if we were growing the stack faster than we shrink it though it would still be O(N), it would simply be a multiple of N. Lifehack for considering space complexity: it's exceptionally rare for space complexity to be anything other than O(1) or O(N).