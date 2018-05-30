var obj = function(){
  this.i = '';
  this.name = function(i){
    this.i += i;
    return this;
  }
  this.go = function(i){
    var g = ' goes to ';
    var t = ' to buy ';
    this.i = this.i + g + i.toLowerCase() + t;
    return this;
  }
  this.buy = function(i){
    console.log(this.i+i.toLowerCase())
  }
}
var x = new obj();
x.name('John').go('Shop').buy('Food');
