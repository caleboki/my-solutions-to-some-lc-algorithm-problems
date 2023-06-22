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


var canVisitAllRooms = function(rooms) {
    
   let visited = new Set()
   visited.add(0)
    
    let roomMap = new Map()
    
    for (room in rooms) {
        roomMap.set(room, rooms[room])
    }
   
    let stack = ['0']
    
    while (stack.length) {
        let keys = roomMap.get(stack.pop())
        
            
            for (let key of keys) {
                if (!visited.has(key.toString())) {
                    visited.add(key.toString())
                    stack.push(key.toString())
                }

            }
            
        
        
    }
    
    return rooms.length === visited.size
    
};