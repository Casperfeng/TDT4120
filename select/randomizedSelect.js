/**
 * @author Casper Feng
 */

//chapter 7 section 3 - A randomized version of quick sort (to be used later)

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

//chapter 9 section 2 - Selection in expected linear time

/**
 * makes it possible to select the ith largest element
 * is faster than sorting then finding the element
 *
 * avg case O(n)
 * worst case O(n^2)
 *
 * @param A is the array to be searched
 * @param p is an index
 * @param r is an index
 * @param i is the ith greatest element
 * @return the ith greatest element
 */
function randomizedSelect(A, p, r, i){

    //base case
    if (p === r){
        return A[p];
    }

    //partitions the array into two sub arrays
    //sets the rightmost index
    //such that A[...q-1] <= A[q] and A[q+1...] >= A[q]
    let q = randomizedPartition(A, p, r);

    //how many element there are to the left side (q - p)
    // + 1 because of the pivot element
    let k = q - p + 1;

    //if the pivot value is the answer
    if (i === k){
        return A[q];
    }

    //checks whether the ith element is
    //in the left or right sub array
    else if (i < k){
        return randomizedSelect(A,p,q-1,i);
    }
    else {
        return randomizedSelect(A,q+1,r,i-k);
    }



}



