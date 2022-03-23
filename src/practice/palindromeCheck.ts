//simple approach
//time O(n^2) and space O(n)

// function isPalindrome(string:string){
//     let newString:string = '';
//     for (let idx1 = string.length-1; idx1 >= 0; idx1--) {
//         newString+=string[idx1];
//     }
//     if(string === newString) return true;
//     return false;
// }

//using recursive
// time O(n) and space O(n)
function isPalindrome(string:string,idx1:number=0):boolean{
    let idx2 = string.length -1 -idx1;
    if(idx1 >= idx2){
        return true
    }else{
        return (string[idx1] === string[idx2]) && isPalindrome(string,idx1+1);
    }
}


//using pointer
//time O(n) space O(1)

// function isPalindrome(string:string):boolean{
//     let idx1= 0;
//     let idx2 = string.length -1;
//     while(idx1 <= idx2){
//         if(string[idx1++] !== string[idx2--]) return false;
//     }
//     return true;
// }

console.log(isPalindrome('rajan'));

