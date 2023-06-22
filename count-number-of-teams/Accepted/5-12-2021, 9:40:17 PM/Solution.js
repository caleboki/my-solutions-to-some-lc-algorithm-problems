// https://leetcode.com/problems/count-number-of-teams

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    var teams = 0
    for (let i = 0 ; i < rating.length ;i++){
        for (let j = i + 1 ; j < rating.length;j++){
            for(let k = rating.length-1 ; k > j ;k-- ){
                if (rating[i] < rating[j] && rating[j] < rating[k]){
                    teams++
                }
                if (rating[i] > rating[j] && rating[j] > rating[k]){
                    teams++
                }
            }
        }  
    }
    return teams
    
    
};