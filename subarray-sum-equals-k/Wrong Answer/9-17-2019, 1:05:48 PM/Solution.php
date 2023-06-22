// https://leetcode.com/problems/subarray-sum-equals-k

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function subarraySum($nums, $k) {
        $sum = 0;
        $count = count($nums);
        
        for ($i = 0; $i < $count; $i++){
            for ($j = $i + 1; $j < $count; $j++) {
                $s = $nums[$i] + $nums[$j];
                if ($s == $k) {
                    $sum++;
                }
                
            }
            
        }
        
        return $sum-1; 
    }
    
    
}