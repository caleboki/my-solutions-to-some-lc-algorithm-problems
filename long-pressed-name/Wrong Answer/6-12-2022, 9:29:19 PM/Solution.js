// https://leetcode.com/problems/long-pressed-name

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let mapNames = new Map(), mapTyped = new Map()
    
    for (let n of name) {
        if (!mapNames.has(n)) mapNames.set(n, 0)
        mapNames.set(n, mapNames.get(n) + 1)
    }
    
    for (let t of typed) {
        if (!mapTyped.has(t)) mapTyped.set(t, 0)
        mapTyped.set(t, mapTyped.get(t) + 1)
    }
    
    for (let t of typed) {
        if (mapTyped.get(t) < mapNames.get(t)) return false
        
    }
    return true
    
};