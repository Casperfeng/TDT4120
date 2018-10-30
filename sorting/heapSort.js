/**
 * @author Casper Feng
 */

//chapter 6 section 4 - The heap sort algorithm

/**
 * the three functions below are used to get
 * the parent, left child and right child
 * given an index i
 * @param i is the index of the node
 * @returns the index of either parent or child
 */


function parent(i){
    return Math.floor(i/2);
}

function left(i){
    return 2*i;
}

function right(i){
    return 2*i + 1;
}

/**
 * the key to maintaining the max-heap-property
 * called recursively because the largest node may conflict
 * with grandparent nodes
 *
 * runtime O(lg n)
 *
 * @param A is an array
 * @param i is an index on A
 */

function maxHeapify(A, i){

    //used to store the largest value - to be used as root
    let largest;

    //the left child node
    let l = left(i);

    //the right child node
    let r = right(i);

    //if l is greater than current node
    if (l <= A.heapsize && A[l] > A[i]){
        largest = l;
    }
    //sets current node as largest
    else {
        largest = i;
    }

    //checks if r is greater than current largest
    if (r <= A.length && A[r] > A[largest]){
        largest = r;
    }
    //if largest is a child then exchange positions
    if (!(largest === i)){
        let temp = A[largest];
        A[largest] = A[i];
        A[i] = temp;
        //run the method again until current node is largest
        maxHeapify(A,largest);
    }
}

/**
 * used bottom-up
 * converts an array A[0...n-1] to a max heap
 * runs maxHeapify on every node
 *
 * runtime  O(n)
 *
 * @param A is the array to be converted to a heap
 */
function buildMaxHeap(A){

    //saves the current size
    A.heapsize = A.length;

    //loops through nodes
    //A[(⌊n/2⌋ + 1)..n] are all blades of the tree
    //starts as a 1-element heap
    for (let i = Math.floor(A.heapsize/2); i>=0; i--){
        maxHeapify(A,i);
    }
}

/**
 * builds a heap then sorts it
 *
 * runtime O(n lg n)
 *
 * @param A
 */
function heapSort(A){
    buildMaxHeap(A);
    for (let i = A.length - 1; i >= 0; i--){
        //exchanges A[0] and A[i]
        let temp = A[0];
        A[0] = A[i];
        A[i] = temp;
        A.heapsize -= 1;
        maxHeapify(A,0);
    }
}