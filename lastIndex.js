const lastIndexOf = (array, value) => {
  for (let i = array.length; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));