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
        let {moves, position, speed} = arr.pop()
        
        if (position === target) best = Math.min(best, moves)
        if (moves >= best) continue
        
        //move foward
        arr.push({moves: moves + 1, position: position += speed, speed: 2*speed})
        
        //if we have offshot target or in the wrong direction
        if ((position + speed > target && speed > 0) || (position + speed < target && speed < 0)) {
            arr.push({moves: moves + 1, position: position, speed: speed > 0 ? -1 : 1})
        }
        
    }
    return best
    
    
};