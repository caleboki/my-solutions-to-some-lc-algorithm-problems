// https://leetcode.com/problems/find-duplicate-file-in-system

/**
 * @param {string[]} paths
 * @return {string[][]}
 */


var findDuplicate = function(paths) {
    let map = {};
    
   for(let i = 0 ; i < paths.length; i++ ) {
       let filesplit = paths[i].split(' ');
       let root = filesplit[0];
       
       for(let j = 1; j < filesplit.length; j++){
           let file = filesplit[j];
           let split = file.split('.')[1] ;
           
           if (map[split] === undefined) map[split] = [];
           map[split].push(root+'/'+file.split('(')[0]);
           
       }

    }
    
    return (Object.values(map).filter(n => n.length > 1))
}