function firstUnique(str) {
  var array = str.split('');
  var result = '';
  var p = 0;
 
  for (var x = 0; x < array.length; x++) {
    p = 0;
 
    for (var y = 1; y < array.length; y++) 
    {
      if (array[x] === array[y]) {
        p+= 1;
      }
    }
 
    if (p < 2) {
      result = array[x];
      break;
    }
  }
  return result;
}
firstUnique('asdasfafghj');