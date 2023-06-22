// https://leetcode.com/problems/tweet-counts-per-frequency

// class TweetCounts {

//     constructor () {
//         this.storage = [];
        
//         this.freqInterval = {
//             minute: 60,
//             hour: 3600,
//             day: 86400
//         }
//     }
    
//     recordTweet(tweetName,time) {
//         this.storage.push([tweetName, time]);  
//     }
    
//     getTweetCountsPerFrequency(freq,tweetName,startTime,endTime) {
        
//         let tweets = this.storage.filter(record => record[0] === tweetName);
        
//         if (tweets.length === 0) return [];
//         const interval = this.freqInterval[freq];
        
//         let roundedInterval = Math.ceil((endTime - startTime + 1) / interval)
//         const cnt = new Uint16Array(roundedInterval);     
        
//         for (const a of tweets) {
//             if (a[1] > endTime || a[1] < startTime) continue;
//             let tweetInterval = (a[1] - startTime + 1)/interval;
            
//             cnt[Math.floor(tweetInterval)]++;
//         }  
//         return cnt;
//     } 
// }

class TweetCounts {  
    constructor () {
      this.data = new Map();

      this.freqInterval = {
        minute: 60,
        hour: 3600,
        day: 86400
      }
    }
  
  recordTweet(tweetName, time) {
    if (!this.data.has(tweetName)) this.data.set(tweetName, []);
    this.data.get(tweetName).push(time);
  }
  
  getTweetCountsPerFrequency(freq, tweetName, startTime, endTime) {
    if (!this.data.has(tweetName)) return [];
    this.data.get(tweetName);
    const interval = this.freqInterval[freq];
    const roundedInterval = Math.ceil((endTime - startTime + 1) / interval)
    const count = new Uint16Array(roundedInterval);
    
    for (const time of this.data.get(tweetName)) {
      if (time > endTime || time < startTime) continue;
      const tweetInterval = (time - startTime + 1)/interval;
      count[Math.floor(tweetInterval)]++;
    }
    return count;
  }
}


/** 
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */