// https://leetcode.com/problems/race-car

/**
 * @param {number} target
 * @return {number}
 */
// var racecar = function(target) {
//     //This problem suggest a bfs at it is use to find the shortest distance between two points
    
//     let arr = [{moves: 0, position: 0, speed: 1}] //initial conditions
//     let best = Infinity
    
//     while (arr.length) {
//         let {moves, position, speed} = arr.pop()
        
//         if (position === target) best = Math.min(best, moves)
//         if (moves >= best) continue
        
//         //move foward
//         arr.push({moves: moves + 1, position: position += speed, speed: 2*speed})
        
//         //if we have offshot target or in the wrong direction
//         if ((position + speed > target && speed > 0) || (position + speed < target && speed < 0)) {
//             arr.push({moves: moves + 1, position: position, speed: speed > 0 ? -1 : 1})
//         }
        
//     }
//     return best
// };

var racecar = function(target) {
    let arr = [{moves: 0, pos: 0, spd: 1}];
    let best = Infinity;
    while (arr.length) {
        let {moves, pos, spd} = arr.pop();
        if (pos === target) best = Math.min(best, moves);
        if (moves >= best) continue;

        // Attempt to move forward
        arr.push({moves: moves+1, pos: pos+spd, spd: 2*spd});

        if ((pos+spd>target && spd>0) || 
            (pos+spd<target && spd<0)) {
            // Reverse if we're moving in the wrong direction
            arr.push({moves: moves+1, pos, spd: spd > 0 ? -1 : 1});
        }
    }  
    return best;
};