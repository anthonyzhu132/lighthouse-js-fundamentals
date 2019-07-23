function lastIndexOf (array, value) {
  var foundMatched = false;
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if(array[i] == value) {
      count = i;
      foundMatched = true;
    }
  }
  if (foundMatched) {
    return count;
  } else {
    return -1;
  }
}