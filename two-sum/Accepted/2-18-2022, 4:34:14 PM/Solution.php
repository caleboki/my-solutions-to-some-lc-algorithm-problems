// https://leetcode.com/problems/two-sum

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        $pairs = [];
        
        for ($i = 0; $i < count($nums); $i++) {
            if (isset($pairs[$nums[$i]])) return [$pairs[$nums[$i]], $i];
            $pairs[$target - $nums[$i]] = $i;
        }
    }
}