export function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(arr.length * Math.random())];
    if(item === not) {
      return randomItemFromArray(arr, not);
    }
    return item;
  }