// https://leetcode.com/problems/design-twitter

class Twitter {
    constructor () {
        this.tweets = [];
        this.following = new Map();
    }
    
    postTweet(userId, tweetId) {
        this.tweets.push({authorId: userId, id: tweetId }); 
    }
    
    getNewsFeed(userId) {
        const n = this.tweets.length;
        const newsIDs = [];
        
        for (let i = n - 1; i >= 0 && newsIDs.length < 10; i--) {
            const tweet = this.tweets[i];
            const isFollowing = this.following.has(userId) && this.following.get(userId).has(tweet.authorId);
            
            if (tweet.authorId === userId || isFollowing) newsIDs.push(tweet.id);
        }
        
        return newsIDs;
        
    }
    
    follow(followerId, followeeId) {
        if (!this.following.has(followerId)) this.following.set(followerId, new Set());
        this.following.get(followerId).add(followeeId);
    }
    
    unfollow(followerId, followeeId) {
        if (this.following.has(followerId)) this.following.get(followerId).delete(followeeId);
    }
}


