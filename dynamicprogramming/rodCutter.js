"use strict";
/**
 * @author Casper Feng
 */


/* THE PROBLEM
 * You are given a rod of size n >0, it can be cut into any number of pieces k (k ≤ n).
 * Price for each piece of size i is represented as p(i) and maximum revenue from a
 * rod of size i is r(i) (could be split into multiple pieces).
 * Find r(n) for the rod of size n.
 */


/**
 * naive recursive top-down implementation
 * of the rod cutter problem
 * @param p is an array of prices [p0,p1,p2]
 * @param n is the length of the rod to be cut
 * @return the max profit possible for the rod
 */
function rec(prices, length) {
    if (length === 0) return 0;
    const ps = prices.slice(0, length);
    const all = ps.map((p, l) => p + rec(prices, length - l - 1));
    return Math.max(...all);
}

function dyn(prices, length) {
    const max = [0];  //len 0 as price 0
    for (let i = 1; i <= length; i++) {
        const ps = prices.slice(0, i);
        const all = ps.map((p, l) => p + max[i - l - 1]);
        max[i] = Math.max(...all);
    }
    return max[length];
}

console.log(dyn([3,7,12,13], 4));