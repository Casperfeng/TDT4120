/**
 * @author Casper Feng
 */

//chapter 8 section 4 - Bucket sort
/**
 * sorts an array given that it is uniformly distributed
 * B is the bucket storer
 * every index in B contains a bucket
 * Only works for numbers between 0-1 at the moment - could have saved a "maxSize" but it is not in the curriculum
 *
 * best case Ω(n+k)
 * average case Θ(n+k)
 * worst case O(n^2)
 *
 * @param A is the array to be sorted
 * @var B is the bucket storer
 * @res stores the sorted array
 */
function bucketSort(A){

    //stores the sorted array
    let res = [];

    //the "bucket storer", array B
    let B = [];

    //makes B a list containing empty buckets, []
    for (let i = 0; i < A.length; i++){
        B[i] = [];
    }

    //adds the element A[j] into the corresponding bucket
    for (let j = 0; j < A.length; j++){
        B[Math.floor(A.length * A[j])].push(A[j]);
    }

    //sorts all the buckets separately
    for (let k = 0; k < B.length; k++) {
        insertionSort(B[k]);
    }

    //concatenates the buckets in the correct order
    for (let l = 0; l < B.length; l++){
        res.push(...B[l]);
    }

    return res;
}

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

let A = [0.5, 0.5, 0.2, 0.9, 0.75, 0.4, 0.1, 0.19];

console.log(bucketSort(A));
