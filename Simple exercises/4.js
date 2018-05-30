function Clock() {
  this.currentdate = new Date();
  this.hours = this.currentdate.getHours();
  this.minutes = this.currentdate.getMinutes();
  this.seconds = this.currentdate.getSeconds();
  }
Clock.prototype.run = function (){
  setInterval(this.update.bind(this), 1000);
  };
Clock.prototype.update = function () 
{this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  };
Clock.prototype.updateTime = function (secs) {
  this.seconds+= secs;
  if (this.seconds >= 60){
  this.minutes++;
  this.seconds= 0;
  }
 if (this.minutes >= 60){
  this.hours++;
  this.minutes=0;
  }
if (this.hours >= 24){
  this.hours = 0;
  }
};
var x = new Clock();
x.run();