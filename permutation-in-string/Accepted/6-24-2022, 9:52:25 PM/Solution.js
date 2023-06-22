// https://leetcode.com/problems/permutation-in-string

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// Create a HashMap to calculate the frequencies of all characters in the pattern.

// Iterate through the string, adding one character at a time in the sliding window.

// If the character being added matches a character in the HashMap, decrement its frequency in the map. If the character frequency becomes zero, we got a complete match.

// If at any time, the number of characters matched is equal to the number of distinct characters in the pattern (i.e., total characters in the HashMap), we have gotten our required permutation.

// If the window size is greater than the length of the pattern, shrink the window to make it equal to the pattern’s size. At the same time, if the character going out was part of the pattern, put it back in the frequency HashMap.

var checkInclusion = function(s1, s2) {
    let j = 0, matched = 0, map = {}
    
    for (let i = 0; i < s1.length; i++) {
        if (!(s1[i] in map)) map[s1[i]] = 0
        map[s1[i]]++  
    }
    
    for (let i = 0; i < s2.length; i++) {
        if (s2[i] in map) {
            map[s2[i]]--
            
            if (map[s2[i]] === 0) matched++ //i.e we have completely matched one character
        }
        
        if (matched === Object.keys(map).length) return true
        //this section makes sure the window length is always the same size as s1
        if (i >= s1.length - 1) {
            let left = s2[j]
            j++
            
            if (left in map) {
                if (map[left] === 0) matched--
                map[left]++
            }
        }   
    }
    
    return false;
};