// https://leetcode.com/problems/long-pressed-name

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */

const isLongPressedName = (name, typed) => {
    let i = 0, j = 0
    
    while (i < name.length || j < typed.length) {
        //if characters match, move both pointers
        if (name[i] === typed[j]) i++, j++
        
        if (name[i] !== typed[j]) {
            if (typed[j-1] === typed[j]) {
                j++
            } else {
                return false
            }
        } 
    }
    return true
}