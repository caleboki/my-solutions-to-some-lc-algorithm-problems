// https://leetcode.com/problems/subarray-sum-equals-k

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function subarraySum($nums, $k) {
        $count = count($nums);
        $sum = 0;
        for ($x = 0; $x < $count-1; $x++) {    
            $s = $nums[$x + 1] + $nums[$x];
            if ($s == $k) {
                $sum++;  
            }            
        }
        if (in_array($k, $nums)) {
            $sum++;
        }
        return $sum; 
    }
    
    
}