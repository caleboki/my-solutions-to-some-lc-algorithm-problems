// https://leetcode.com/problems/validate-ip-address

/**
 * @param {string} queryIP
 * @return {string}
 */
const isDigit = (c) => '0123456789'.indexOf(c) != -1;
const isHexadecimal = (c) => '0123456789abcdefABCDEF'.indexOf(c) != -1;

const validIPAddress = (ss) => {
    let cnt = firstCheck(ss, '.'), a = ss.split('.');
    if (cnt == 3) { // 3 '.' appears (no begin, end or consecutive) for start checking ipv4
        let ok = true;
        for (const s of a) {
            if (!IPV4(s)) {
                ok = false;
                break;
            }
        }
        if (ok) return 'IPv4';
    }
    cnt = firstCheck(ss, ':'), a = ss.split(':');
    if (cnt == 7) { // 7 ':' appears (no begin, end or consecutive) for start checking ipv6
        let ok = true;
        for (const s of a) {
            if (!IPV6(s)) {
                ok = false;
                break;
            }
        }
        if (ok) return 'IPv6';
    }
    return 'Neither';
};

const firstCheck = (s, mark) => { // '.' count and ':' count for ipv4 and ipv6 respectively
    let cnt = 0, n = s.length;
    if (s[0] == mark || s[n - 1] == mark) return false; // mark cannot be show in begin or end
    for (let i = 0; i < n; i++) {
        if (s[i] == mark) {
            if (i - 1 >= 0 && s[i - 1] == mark) { // cannot has '..' or '::'
                cnt = false;
                break;
            }
            cnt++;
        }
    }
    return cnt;
};

const IPV4 = (s) => {
    if (s[0] == '0' && s.length > 1) return false; // cannot has leading zero, but '0' is valid
    for (let c of s) {
        if (!isDigit(c)) return false;
    }
    let x = s - '0';
    return x >= 0 && x <= 255;
};

const IPV6 = (s) => {
    for (let c of s) {
        if (!isHexadecimal(c)) return false;
    }
    return s.length >= 1 && s.length <= 4;
};