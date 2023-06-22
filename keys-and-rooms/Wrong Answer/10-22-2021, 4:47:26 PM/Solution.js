// https://leetcode.com/problems/keys-and-rooms

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let keys = new Set(rooms[0])
    
    for (let i = 1; i < rooms.length; i++) {
        //console.log(keys)
        if (rooms[i].length === 0) continue
        if (!keys.has(i)) return false
        console.log(rooms[i])
        keys.add(...rooms[i])
    }
    
    return true 
};