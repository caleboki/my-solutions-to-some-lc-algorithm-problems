// https://leetcode.com/problems/boats-to-save-people

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */

//  Intuition

// If the heaviest person can share a boat with the lightest person, then do so. Otherwise, the heaviest person can't pair with anyone, so they get their own boat.

// The reason this works is because if the lightest person can pair with anyone, they might as well pair with the heaviest person.

const numRescueBoats = (people, limit) => {
    people.sort((a, b) => {
        return a-b
    })

    let i = 0, j = people.length - 1, min = 0

    while(i <= j) {
        min++
        let current = people[i] + people[j]
        if (current <= limit) i++
        j--
    }

    return min
}

