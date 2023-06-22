// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    
    const removeDuplicates = (s, k) => {
        let map = [], sb = ''

        for (let i = 0; i < s.length; i++) {

            if (map.length > 0 && map[map.length - 1][0] === s[i]) {
                map[map.length - 1][1]++
            } else {
                map.push([s[i], 1])
            }

            if (map[map.length - 1][1] === k) map.pop()
        }

        for (let i in map) {
            sb += map[i][0].repeat(map[i][1])
        }
    
        return sb
    };
    
    return removeDuplicates(s, 2)
    
};