function concat (array1, array2) {
  var array3 = [];
  for (var i = 0; i < array1.length; i++) {
    array3.push(array1[i]);
  }
  for (var z = 0; z < array2.length; z++) {
    array3.push(array2[i]);
  }
  return array3;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);