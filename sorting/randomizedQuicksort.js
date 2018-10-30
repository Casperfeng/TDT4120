/**
 * @author Casper Feng
 */

//chapter 7 section 3 - A randomized version of quick sort

/**
 * helper method in order to generate a random number between min and max
 *
 * @param min
 * @param max
 * @returns an int between min and max
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * rearranges the subarray A[p..r] **in-place**
 * chooses one element in the array as a pivot point
 * then it divides the array into four possible
 *
 * The loop invariant:
 * 1. If p ≤ k ≤ i, then A[k] ≤ x
 * 2. If i + 1 ≤ k ≤ j – 1, then A[k] > x
 * 3. If k == r, then A[k] = x
 *
 * @param A is the array to bse sorted
 * @param p is an index
 * @param r is an index
 * @returns
 * given that p <= r
 */

function partition(A, p, r){

    //the selected pivot element, x
    let x = A[r];
    let i = p - 1;
    //loops through the sub array
    // ≤x | ≥x | x
    for (let j = p; j < r; j++){
        if (A[j] <= x){
            i++;
            //exchanges A[j] and A[i]
            let temp = A[j];
            A[j] = A[i];
            A[i] = temp;
        }
    }
    //exchanges A[i + 1] and A[r]
    let temp = A[i + 1];
    A[i + 1] = A[r];
    A[r] = temp;
    //the list should be
    //≤x | x | ≥x
    return i + 1;
}

/**
 * helper method used in randomizedSelect
 * chooses a random element in A and moves it to the right
 * used to lessen frequency of worst case sorting
 *
 * @param A is the array to be partitioned
 * @param p is an index
 * @param r is an index
 * @return function calls partition - scroll up for more information
 * given that p <= r
 */
function randomizedPartition(A,p,r){

    //chooses a random int between p and r
    const i = getRandomInt(p,r);

    //exchange A[r] with A[i]
    let temp = A[r];
    A[r] = A[i];
    A[i] = temp;

    //calls partition
    return partition(A,p,r);
}

/**
 * less cases of worst case scenario happening.
 *
 * best case Ω(n log(n))
 * avg case Θ(n log(n))
 * worst case O(n^2)
 *
 * @param A is the array to be sorted
 * @param p is an index
 * @param r is an index
 * given that p <= r
 */
function randomizedQuicksort(A, p, r){
    if (p < r){
        let q = randomizedPartition(A, p, r);
        randomizedQuicksort(A,p,q-1);
        randomizedQuicksort(A,q+1,r);
    }
}