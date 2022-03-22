// function isValidSubsequence(array:number[],sequence:number[]):boolean{
//     let index = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === sequence[index]) {
//             index++
//         }
//         if(index >= sequence.length) break;
//     }
//     if(index === sequence.length) return true;
//     return false;
// }


function isValidSubsequence(array:number[],sequence:number[]):boolean{
    let arrIdx = 0;
    let seqIdx = 0;
    while(arrIdx < array.length && seqIdx < sequence.length){
        if(array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++;
    }
    return seqIdx === sequence.length;
}

let _arr1 = [5,1,22,25,6,-1,8,10];
let sequence = [1,6,-1,10];

console.log(isValidSubsequence(_arr1,sequence));