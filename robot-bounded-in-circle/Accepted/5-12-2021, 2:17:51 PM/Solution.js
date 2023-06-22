// https://leetcode.com/problems/robot-bounded-in-circle

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    
    //if end position = start position or a direction != North then we are in a circle
    
    if (instructions.length < 1) return false
    if (instructions.length > 100) return false
    
    let x = 0, y = 0, direction = 0;
    
    for (cmd of instructions) {
        if (cmd === 'G') {
            //Check robot direction to decide co-ordinate to increment
            
            if (direction === 0) y++
            if (direction === 3) x--
            if (direction === 2) y--
            if (direction === 1) x++
        }
        else if (cmd === 'L') {
            direction = (direction + 5)%4
        }
        else if (cmd === 'R') {
            direction = (direction + 3)%4
        }
    }
    
    if ((x === 0) && (y === 0)) return true
    if (direction !== 0) return true
    return false
    
    
};