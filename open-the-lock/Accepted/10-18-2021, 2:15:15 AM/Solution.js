// https://leetcode.com/problems/open-the-lock

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
//See: https://leetcode.com/problems/open-the-lock/discuss/870846/Javascript-BFS
var openLock = function(deadends, target) {
   
   if (target === null || target.length === 0) return  -1
    
    const getNextStates = (lock) => {
        let newLocks = new Set()
        
        for (let i = 0; i < 4; i++) {
            
            lock = lock.split('')
            let c = lock[i]
            
            //moving clockwise
            lock[i] = c === '9' ? lock[i] = '0' : lock[i] = (parseInt(lock[i]) + 1).toString()
            //moving anti-clockwise
            lock[i] = c === '0' ? lock[i] = '9' : lock[i] = (parseInt(lock[i]) - 1).toString()
            
            lock = lock.join('')
            newLocks.add(lock)
        }
        
        return newLocks
    }
    
    let visited = new Set(deadends)
    
    let queue = ['0000']
    let level = 0
    
    while (queue.length) {
        level++
        let length = queue.length
        
        for (let i = 0; i < length; i++) {
            let currentLock = queue.shift()
            if (visited.has(currentLock)) continue
            if (currentLock === target) return level
            
            for (let nextLock of getNextStates(currentLock)) {
                if (!visited.has(nextLock)) queue.push(nextLock)
            }
            visited.add(currentLock)
        }
    }
    
    return -1
}

var openLock = function (deadends, target) {
    if (target === null || target.length === 0) return  -1
    
    deadends = new Set (deadends)
    let visited = new Set(['0000'])
    let queue = ['0000']
    let level = 0
    
    const getNextStates = (lock, ans = []) => {
        for (let i = 0; i < 4; i++) {
            // modulus % avoids negative numbers when using +1 or -1 (could get around this    //with an if statement)
            ans.push(lock.slice(0,i) + ((+lock[i]+1)%10) + lock.slice(i+1)) //(i+1) is the rest of the string
            ans.push(lock.slice(0,i) + ((+lock[i]+9)%10) + lock.slice(i+1))
        }
        
        return ans
    }
    
    while (queue.length) {
        
        const next = []
        for (let comb of queue) {
            if (comb === target) return level
            if (deadends.has(comb)) continue
            
            for (let newComb of getNextStates(comb)) {
                if (visited.has(newComb)) continue
                visited.add(newComb)
                next.push(newComb)
            }
            
        }
        level++
        queue = next
    }
    
    return -1
}