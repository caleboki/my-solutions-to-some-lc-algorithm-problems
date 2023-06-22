// https://leetcode.com/problems/subarray-sum-equals-k

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function subarraySum($nums, $k) {
        $count = 0;
        $c = count($nums);
        
        for ($i = 0; $i < $c; $i++){
            $sum = 0;
            for ($j = $i; $j < $c; $j++) {
                $sum += $nums[$j];
                if ($sum == $k) {
                    $count++;
                }
                
            }
            
        }
        
        return $count; 
    }
    
    
}