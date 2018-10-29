'use strict';

//chapter 2 section 1 - Insertion sort
//best case Ω(n)
//avg case Θ(n^2)
//worst case O(n^2)

/**
 * checks every element and "compares" key and value
 * @param A is the array to be sorted
 */
function insertionSort(A){

    //the array is divided into "sorted" and "unsorted" sections
    //we set the leftmost element as the sorted one
    for (let j = 1; j < A.length; j++){

        //key is the element that is currently getting checked
        let key = A[j];

        //i remembers the elements of the sorted part
        let i = j - 1;

        //runs until index is 0 or when key is placed correctly in the sorted part
        //exits the loop when an item is placed at the correct position
        while (i>= 0 && A[i] > key){

            //exchange element at index i and the key
            A[i + 1] = A[i];
            i = i - 1;
        }
        //when the while loop terminates key-value is inserted
        A[i + 1] = key;
    }
}