var arr = [];
 
var columnDefs = function(key, sortable, resizeable){
    this.key = key;
    this.sortable = sortable;
    this.resizeable = resizeable;
    };
 
var addData = function(id, name){
  var temp = new Array;
  var temp1 = {[id]: name}
  temp.push({[id]: [name]});
  console.log(temp1);
}
 
var obj = [
  {id:1, name: "dog", parentId: null},
  {id:2, name: "Buddy", parentId:1 },
  {id:3, name: "Daisy", parentId:1 },
  {id:4, name: "cat", parentId:null },
  {id:5, name: "Smokey", parentId:4 },
  {id:6, name: "Oscar", parentId:4 },
];
 
var id = null;
var parentId = null;
var name = null;
for(i in obj)
{
  if(obj[i].parentId == null){
    name = obj[i].name;
    if(obj[i].parentId == null)
      id = obj[i].id;
    else
    id = obj[i].parentId;
    var temp = [];
 
    for(j in obj){
      if(obj[j].parentId == id)
        temp.push(obj[j].name);
    }
 
    arr.push(new addData(name, temp));
  }
 
} 
console.log(arr);