// https://leetcode.com/problems/sum-of-total-strength-of-wizards

class Solution {
    
    public int totalStrength(int[] strength) {
        int sum = 0;
        for (int i = 0; i < strength.length; i++) {
            int weakest = Integer.MAX_VALUE;
            int total = 0;
            for (int j = i; j < strength.length; j++) {
                if (strength[j] < weakest)
                    weakest = strength[j];      
                total = (total + strength[j]) % 1000000007;
                int totalStrength = (weakest * total) % 1000000007;
                sum = (sum + totalStrength) % 1000000007;
            }
        }
        return sum;
    }
}