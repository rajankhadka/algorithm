// not optimal
// time O(n^2) space O(1)

// function firstNonRepeatingCharacter(string:string){
//     let index = -1;
//     for (let i = 0; i < string.length; i++) {
//         let flag = false;
//         for (let j = 0; j < string.length; j++) {
//             if(i === j) continue;
//             if(string[i] === string[j]) flag = true;
//         }

//         if(!flag){
//             index = i;
//             break;
//         }
//     }
//     if(index > -1){
//         console.log(index);
//     }
// }

// function firstNonRepeatingCharacter(string: string) {
//   let hashMap = new Map();
//   for (let i = 0; i < string.length; i++) {
//     if (hashMap.get(string[i])) {
//       hashMap.set(string[i], hashMap.get(string[i]) + 1);
//     } else {
//       hashMap.set(string[i], 1);
//     }
//   }

//   for (let i = 0; i < string.length; i++) {
//     if (hashMap.get(string[i]) === 1) {
//       return i;
//     }
//   }
//   return -1;
// }

function firstNonRepeatingCharacter(string:string):number{
    const character:{[char:string]:number} = {};
    for (let i = 0; i < string.length; i++) {
        if(!(string[i] in character)) character[string[i]] = 0;
        character[string[i]]++;  
    }
    
    for (let i = 0; i < string.length; i++) {
        if(character[string[i]] === 1) return i;        
    }
    return -1;
}

console.log(firstNonRepeatingCharacter("abcdcafd"));
