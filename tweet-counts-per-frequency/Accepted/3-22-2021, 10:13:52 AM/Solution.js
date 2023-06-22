// https://leetcode.com/problems/tweet-counts-per-frequency

class TweetCounts {
    constructor () {
        this.freqInterval = {
            minute: 60,
            hour: 3600,
            day: 86400
        };

        this.data = new Map();
    }

    recordTweet (tweetName, time) {
        if (!this.data.has(tweetName)) {
            this.data.set(tweetName, []);
        }
        this.data.get(tweetName).push(time);
    }

    getTweetCountsPerFrequency(freq, tweetName, startTime, endTime) {
        if (!this.data.has(tweetName)) return [];
        const interval = this.freqInterval[freq];
        const cnt = new Uint16Array(Math.ceil((endTime - startTime + 1) / interval));

        for (const time of this.data.get(tweetName)) {
            if (time > endTime || time < startTime) continue;
            ++cnt[Math.floor((time - startTime + 1) / interval)];
        }

        return cnt;
    }
}



/** 
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */