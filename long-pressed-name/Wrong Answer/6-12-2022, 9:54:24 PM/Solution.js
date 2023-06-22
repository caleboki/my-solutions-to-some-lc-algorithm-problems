// https://leetcode.com/problems/long-pressed-name

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let mapNames = new Map(), mapTyped = new Map(), typedSet = new Set(typed)
    
    for (let n of name) {
        if (!mapNames.has(n)) mapNames.set(n, 0)
        mapNames.set(n, mapNames.get(n) + 1)
    }
    
    for (let t of typed) {
        if (!mapTyped.has(t)) mapTyped.set(t, 0)
        mapTyped.set(t, mapTyped.get(t) + 1)
    }
    console.log(mapNames)
    console.log(mapTyped)
    typedSet = Array.from(typedSet)
    
    for (let i = 0; i < typedSet.length; i++) {
        if (typedSet[i] !== name[i]) return false
    }
    
    for (let i = 0; i < typed.length; i++) {
        
        if (mapTyped.get(typed[i]) < mapNames.get(typed[i])) return false
        
    }
    return true
    
};