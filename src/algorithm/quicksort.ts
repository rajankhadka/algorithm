function partition(arr: number[], low: number, high: number): number {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      //swap
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  //swap
  let temp = arr[i];
  arr[i] = pivot;
  arr[high] = temp;

  return i;
}

function quickSort(arr: number[], low: number, high: number) {
  if (low < high) {
    let pidx = partition(arr, low, high);

    quickSort(arr, low, pidx - 1);
    quickSort(arr, pidx + 1, high);
  }
}

let _arr3: number[] = [6, 3, 9, 5, 2, 8];
console.log(_arr3);
quickSort(_arr3, 0, _arr3.length - 1);
console.log(_arr3);
