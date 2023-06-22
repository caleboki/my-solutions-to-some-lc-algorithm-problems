// https://leetcode.com/problems/web-crawler

/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
*/

// Intuition: We need a hashtable to track sites we've seen, and a queue to process the urls as we get them. For each url remove it from the queue, get its urls and add them to the end of the queue.
var crawl = function(startUrl, htmlParser) {
    const seen = {};
    const results = [startUrl];
    seen[startUrl] = true;
    
    const hostname = getHostname(startUrl);
    const queue = htmlParser.getUrls(startUrl);
    
    while(queue.length) {
        const url = queue.shift();
        if (!seen[url]) {
            seen[url] = true;
            if (getHostname(url) === hostname) {
                results.push(url);
                
                const urls = htmlParser.getUrls(url);
                for (const u of urls) {
                    queue.push(u);
                }
            }
        }
    }
    return results;
};

function getHostname(url) {
    const hostname = (new URL(url)).hostname;
    return hostname;
    
}



