function bubbleSort(array:number[]){
    for (let i = 0; i < array.length ; i++) {
        for (let j = i; j < array.length ; j++) {
            if(array[i] > array[j] ){
                //swap
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }        
    }
}

let _arr4 = [8,5,2,9,5,6,3];
bubbleSort(_arr4);
console.log(_arr4);