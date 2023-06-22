// https://leetcode.com/problems/robot-room-cleaner

/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
// var cleanRoom = function(robot) {
//     //must be clockwise or anti-clockwise and not random
//     let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]], visited = new Set()

//     const goBack = () => {
//         Robot.turnRight()
//         Robot.turnRight()
//         Robot.move()
//         Robot.turnRight()
//         Robot.turnRight()
//     }
//     const backTrack = (x, y, direction) => {
//         let pos = x + ',' + y
//         visited.add(pos)
//         Robot.clean()

//         for (let i of directions) {

//         }
//     }    
// };

const cleanRoom = robot => {
    const visited = new Set()
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    
    const key = (x, y) => x + '_' + y
    
    const goBack = () => {
        robot.turnRight()
        robot.turnRight()
        robot.move()
        robot.turnRight()
        robot.turnRight()
    }
    
    const backtrack = (row = 0, col = 0, direction = 0) => {
        visited.add(key(row, col))
        robot.clean()
        
        for (let i = 0; i < 4; i++) {
            const newDirection  = (i + direction) % 4
            
            const x = row + directions[newDirection][0]
            const y = col + directions[newDirection][1]
            
            if (!visited.has(key(x, y)) && robot.move()) {
                backtrack(x, y, newDirection)
                goBack()
            }
        
            robot.turnLeft()
        }
    }
    
    backtrack()
}