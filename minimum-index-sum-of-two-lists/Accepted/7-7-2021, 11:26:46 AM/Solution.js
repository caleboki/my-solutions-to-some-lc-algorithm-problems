// https://leetcode.com/problems/minimum-index-sum-of-two-lists

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let map = {}
    
    for (let i = 0; i < list1.length; i++) {
        if (map[list1[i]] === undefined) {
            map[list1[i]] = [1, i]
        }
    }
    
    for (let i = 0; i < list2.length; i++) {
        if (map[list2[i]] === undefined) {
            map[list2[i]] = [1, i]
        }else {
            map[list2[i]][0]++
            map[list2[i]][1] = map[list2[i]][1] + i
        }
    }
    let common = Object.keys(map).filter(f=> map[f][0] === 2)
    
    if (common.length === 1) return common
    
    let min = Infinity
    
    for (let i = 0; i < common.length; i++) {
        if (map[common[i]][1] < min) {
            min = map[common[i]][1]
        } 
    }
    
    common = Object.keys(map).filter(f=> map[f][0] === 2 && map[f][1] === min)
    return common
    
};