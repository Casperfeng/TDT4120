//chapter 7 section 1 - Description of quick sort


/**
 *
 * @param A is array to be sorted
 * @param p is an index
 * @param r is an index
 * given that p <= r
 */
function quickSort(A, p, r){
    if (p < r){
        q = partition(A, p, r);
        quickSort(A, p, q-1);
        quickSort(A, q+1, r);
    }
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

A = [1,9,3,4,6,22,2,1,9,2,4,11,29];
quickSort(A, 0, A.length-1);
console.log(A);