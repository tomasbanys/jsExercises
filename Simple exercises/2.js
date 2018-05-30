function combinations (a) {
   result = new Array();
   for(i=0;i<a.length;i++) {
       for(j=i+1;j<a.length+1;j++) {
           result.push(a.slice(i, j));
       }
   }
   return result;
}
combinations("dog");