// https://leetcode.com/problems/rank-teams-by-votes

/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    const count = {};
    const teams = new Set();
  
  // count the position-one votes for each team
  for (let vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      const team = vote[i];
      teams.add(team);
      count[team] = count[team] || Array(vote.length).fill(0);
      count[team][i]++;
    }
  }
  
  // sort the teams by their count
  const sortedTeams = Array.from(teams).sort((a, b) => {
    for (let i = 0; i < count[a].length; i++) {
      if (count[a][i] !== count[b][i]) {
        return count[b][i] - count[a][i];
      }
    }
    return a.localeCompare(b);
  });
  
  return sortedTeams.join('');
};