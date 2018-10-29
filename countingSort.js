'use strict';

//chapter 8 section 2 - Counting sort
function countingSort(A,B,k){

    //initialize the C-array that is used to store frequency of numbers
    let C = [];
    for (let i = 0; i < k; ++i){
        C[i] = 0;
    }

    //count each of the items in the input array
    for (let j = 0; j < A.length; ++j) {
        C[A[j]]++;
    }

    //running count of the items.
    //used to determine items position in the output array
    //checks how many elements are lesser than or equal to item
    for (let i = 1; i < k; ++i){
        C[i] = C[i] + C[i-1];
    }

    //positions the items in the output array based on C
    //starting at the rightmost side we guarantee items are added
    //the algorithm is stable
    for (let j = A.length - 1; j >= 0; --j){
        B[C[A[j]] - 1] = A[j];
        C[A[j]]--;
    }

}
