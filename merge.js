//sort two arrays into one sorted array
const merge = (arr1, arr2) => {
  return (arr1.concat(arr2)).sort(); //concantinate two arrays then sort the result
};

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);