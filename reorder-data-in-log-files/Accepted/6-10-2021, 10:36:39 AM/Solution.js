// https://leetcode.com/problems/reorder-data-in-log-files

/**
 * @param {string[]} logs
 * @return {string[]}
 */

// split numeric/letter logs, since sort() that is used in JS (quicksort) is not stable and //will reshuffle the numeric logs, that we dont need

//merge sorted letter-logs with numeric ones

var reorderLogFiles = function(logs) {
    const numeric = []
    const letter = []
    
    for (const log of logs) {
        if (isNumericLog(log)){
            numeric.push(log)
            continue
        }
        
        letter.push(log)
    }
    
    return [
        ...letter.sort(compareLetterLogs),
        ...numeric
    ]
};

const digits = new Set('0123456789')

function isNumericLog(log){
    return digits.has(log[log.length - 1])
    //return digits.has(log.charAt(log.length - 1));
}

function compareLetterLogs(a, b) {
    const aBody = getBody(a)
    const bBody = getBody(b)
    
    //return aBody === bBody ? a.localeCompare(b) : aBody.localeCompare(bBody);
    
    if (aBody === bBody) {
        return a.localeCompare(b)
    } else {
        return aBody.localeCompare(bBody)
    }
}

function getBody(log) {
    return log.slice(log.indexOf(' ') + 1);
}

