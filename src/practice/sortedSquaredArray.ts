
// by using merge sort 
// time O(nlogn) space O(n)

// function squaredArray(arr:Array<number>):Array<number>{
//     return arr.map((n) => n*n )
// }

// //merged sort
// function mergedFun(arr:number[],si:number,ei:number,mi:number){
//     let idx1 = si;
//     let idx2 = mi+1;
//     let x = 0;
//     let merge:number[] = [];

//     while(idx1 <= mi && idx2 <= ei){
//         if(arr[idx1] <= arr[idx2]){
//             merge[x++] = arr[idx1++];
//         }else{
//             merge[x++] = arr[idx2++];
//         }
//     }

//     while(idx1 <= mi) {
//         merge[x++] = arr[idx1++]
//     };
//     while(idx2 <= ei) {
//         merge[x++] = arr[idx2++]
//     };
    
//     for(let i=0,j=si ; i < merge.length ; i++,j++){
//         arr[j] = merge[i];
//     }
// }


// function dividerule(arr:number[],si:number,ei:number){
//     if(si >= ei) return;
//     let mid:number = si +  Math.floor((ei-si)/2);
//     dividerule(arr,si,mid);
//     dividerule(arr,mid+1,ei);
//     mergedFun(arr,si,ei,mid);
// }




// const newArr = squaredArray(_arr2);
// console.log(newArr);

// dividerule(newArr,0,newArr.length-1);
// console.log(newArr);

let _arr2 = [-9,-5,-3,1,2,6];
// by using pointer (start and end pointer)
// time O(nlogn) space O(n)


function sortedSquaredArray(array:number[]):number[]{
    let si = 0;
    let ei = array.length -1;
    let length = array.length -1;
    let newArr = []
    while(si <= ei){
        if(Math.abs(array[si]) < Math.abs(array[ei])){
            newArr[length--] = array[ei] * array[ei];
            ei--;
        }else{
            newArr[length--] = array[si] * array[si];
            si++;
        }
    }

    return newArr;
}


console.log(sortedSquaredArray(_arr2));