// https://leetcode.com/problems/keys-and-rooms

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let keys = new Set(rooms[0])
    
    for (let i = 1; i < rooms.length; i++) {
       if (!keys.has(i)) return false
        keys = new Set(rooms[i])
    }
    
    return true 
};