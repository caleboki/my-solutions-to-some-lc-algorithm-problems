// https://leetcode.com/problems/add-two-numbers

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */

class Solution {

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers($l1, $l2) {
        return $this->addTwoNumbersWithCarry($l1, $l2);
    }

    public function addTwoNumbersWithCarry(?ListNode $l1, ?ListNode $l2, int $carry = 0): ListNode
    {
        $x = $y = 0;
		$n1 = $n2 = null;

        if ($l1) {
            $x = $l1->val;
            $n1 = $l1->next;
        }

        if ($l2) {
            $y = $l2->val;
            $n2 = $l2->next;
        }

        $sum = $x + $y + $carry;
        $carry = $sum > 9 ? 1 : 0;

        $node = new ListNode($sum % 10);

        if ($n1 || $n2 || $carry) {
            $node->next = $this->addTwoNumbersWithCarry($n1, $n2, $carry);
        }

        return $node;
    }
}
// class Solution {

//     /**
//      * @param ListNode $l1
//      * @param ListNode $l2
//      * @return ListNode
//      */
//     function addTwoNumbers($l1, $l2) {
//         $num1 = '';
//         $num2 = '';
//         $result = '';
//         $carrying = false;
//         $head;
        
//         //convert linkedlists l1 and l2 to strings
//         while($l1) {
//             $num1 = $num1.$l1->val;
//             $l1 = $l1->next;
//         }
        
//         while($l2) {
//             $num2 = $num2.$l2->val;
//             $l2 = $l2->next;
//         }
        
        
//         $num1 = strrev($num1);
//         $num2 = strrev($num2);
        
        
//         while(strlen($num1) !== 0 || strlen($num2) !== 0) {
//             print((int)substr($num1, strlen($num1)-1));
            
//             $num = (int)(substr($num1, strlen($num1)-1) || 0) + (int)(substr($num2, strlen($num2)-1) || 0) + (+$carrying);
            
//             $carrying = ($num >= 10);
            
            
//             $result = strval(explode(" ", strval($num))[1] || $num).$result;
//             $num1 = substr($num1, 0, -1);
//             $num2 = substr($num2, 0, -1);
//         }
//         $result = $carrying ? '1'.$result: $result;
        
//         //Convert result to linkedlist
//         for ($i = 0; $i < strlen($result); $i++) {
//             $head = new ListNode($result[$i], $head);
//         }
        
//         return $head;
        
//     }
// }

