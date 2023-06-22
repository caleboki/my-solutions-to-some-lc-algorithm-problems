// https://leetcode.com/problems/open-the-lock

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
//See: https://leetcode.com/problems/open-the-lock/discuss/870846/Javascript-BFS

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