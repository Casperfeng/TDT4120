function bubbleSort(A){
    let len = A.length;
    for (let i = 0; i < len ; i++) {
        for(let j = 0 ; j < len - i - 1; j++){

            //compares current element with next element
            if (A[j] > A[j + 1]) {

                // exchanges A[i] and A[i+1]
                let temp = A[j];
                A[j] = A[j+1];
                A[j + 1] = temp;
            }
        }
    }
    return A;
}
