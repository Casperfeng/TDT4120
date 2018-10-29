//chapter 2 section 3.1 - The divide-and-conquer approach

/**
 * sorts an array by using the divide-and-conquer method
 * splits the array into halves and merges them recursively
 *
 * best case Ω(n log(n))
 * avg case Θ(n log(n))
 * worst case O(n log(n))
 *
 * @param A is the array
 * @returns A (sorted)
 */
function mergeSort(A){

    //base case for the recursion
    if (A.length === 1){
        return A;
    }

    //mid element (pivot point for dividing)
    const mid = Math.floor(A.length/2);
    //left array
    const L = A.slice(0, mid);
    //right arrays
    const R = A.slice(mid);

    return merge(mergeSort(L), mergeSort(R));
}

/**
 * helper function for mergeSort
 * compares the array item by item
 *
 * The book uses a sentinel
 * but I did not implement it here
 *
 * @param l is the leftmost array
 * @param r is the rightmost array
 */

function merge(l, r){

    //where the sorted array is to be stored
    let sortedArray = [];

    //left index
    let lIndex = 0;

    //right index
    let rIndex = 0;

    //loops through
    while (lIndex < l.length && rIndex < r.length){
        // left element is lower than right element
        if (l[lIndex] < r[rIndex]){
            sortedArray.push(l[lIndex]);
            lIndex++;
        }
        // right element is lower than left element
        else {
            sortedArray.push(r[rIndex]);
            rIndex++;
        }
    }

    return sortedArray.concat(l.slice(lIndex)).concat(r.slice(rIndex));
}


let A = [2,5,1,3,7,2,3,8,6,3];
console.log(mergeSort(A));
//[1,2,2,3,3,3,5,6,7,8]