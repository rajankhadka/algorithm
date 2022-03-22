function conquer(arr:number[],si:number,ei:number,mid:number){
    let mergerdArray:number[] = [];
    let idx1 = si;
    let idx2 = mid+1;
    let x = 0;

    while(idx1 <= mid && idx2 <= ei){
        if(arr[idx1] <= arr[idx2]){
            mergerdArray[x++] = arr[idx1++];
        }else{
            mergerdArray[x++] = arr[idx2++];
        }
    }

    while(idx1 <= mid){
        mergerdArray[x++] = arr[idx1++];
    }

    while(idx2 <= ei){
        mergerdArray[x++] = arr[idx2++];
    }

    for (let i = 0,j=si; i < mergerdArray.length; i++,j++) {
        arr[j] = mergerdArray[i];
    }

}


function divide(arr:number[],si:number,ei:number){
    if(si >= ei) return;
    let mid:number = si + Math.floor((ei-si)/ 2);
    divide(arr,si,mid);
    divide(arr,mid+1,ei);
    conquer(arr,si,ei,mid);
}


const _arr:number[] = [6,3,5,2,9,8];
divide(_arr,0,_arr.length-1);
console.log(_arr);