// https://leetcode.com/problems/longest-substring-without-repeating-characters

class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s) {
        $map = [];
        $j = 0;
        $max = 0;
        
        for ($i = 0; $i < strlen($s); $i++) {
            if (isset($map[$s[$i]])) $j = max($j, $map[$s[$i]] + 1);
            $map[$s[$i]] = $i;
            
            $max = max($max, $i - $j + 1);
        }
        
        return $max;
    }
}
