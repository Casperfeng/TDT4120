//chapter 7 section 1 - Description of quick sort


/**
 *
 * @param A
 * @param p
 * @param r
 * @returns {*}
 */
function quickSort(A, p, r){

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
 * @param A is the array to be sorted
 * @param p is an index
 * @param r is an index
 * @returns {*}
 * given that p <= r
 */

function partition(A, p, r){

    //the selected pivot element, x
    let x = A[r];


    let i = p - 1;

    //loops through the sub array
    for (let j = p; j < r; j++){
        if (A[j] <= x){
            i++;
            //exchanges A[j] and A[i]
            let temp = A[j];
            A[j] = A[i];
            A[i] = temp;
        }
    }
    return i + 1;
}