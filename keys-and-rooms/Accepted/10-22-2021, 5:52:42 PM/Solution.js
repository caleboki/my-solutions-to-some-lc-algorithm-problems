// https://leetcode.com/problems/keys-and-rooms

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
// var canVisitAllRooms = function(rooms) {
//     let keys = new Set(rooms[0])
    
//     for (let i = 1; i < rooms.length; i++) {
        
//         if (rooms[i].length === 0) continue
//         if (!keys.has(i)) return false
        
//         keys.add(...rooms[i])
//         console.log(keys)
//     }
    
//     return true 
// };


const canVisitAllRooms = function(rooms) {
    const  visited = new Set()
    const stack = [rooms[0]]
    visited.add(0)
    
    while(stack.length) {
        const curr = stack.pop()
        
        for(let i = 0; i < curr.length; i++) {
            const key = curr[i]
            if(!visited.has(key)) {
                stack.push(rooms[key])
                visited.add(key)
            }
        }
    }
    
    return  visited.size === rooms.length 
};