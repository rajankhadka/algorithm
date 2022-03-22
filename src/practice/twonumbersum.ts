function twoNumberSum(array:number[],targetSum:number):number[]| boolean{
    let hashMap :{[index:number]:boolean} = {};
	for(let i=0;i< array.length;i++){
		const output = targetSum - array[i];
		if(output in hashMap){
			return [array[i],output];
		}else{
			hashMap[array[i]] = true;
		}
	}
  return [];
}


let arr:number[] = [-4,6,-1,1,8,2,11];
let result:number = 10;
const output:number[] | boolean = twoNumberSum(arr,result);
console.log(output);