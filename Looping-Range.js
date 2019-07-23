function range(start,end,step){
  var array = [];
  if (start > end){
    return [];
  }
  if (step < 0){
    return [];
  }
  if (end, step, start == null){
    return [];
  }
  for (var i = start; i <= end; i += step){
    array.push(i);
  }
  return array;
}