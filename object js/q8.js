function myClock(){
    this.curr_date=new Date();
    this.hours=this.curr_date.getHours();
    this.minutes=this.curr_date.getMinutes();
    this.seconds=this.curr_date.getSeconds();
}

myClock.prototype.run=function()
{
    setInterval(this.update.bind(this),1000);
};

myClock.prototype.update=function()
{
    this.updateTime(1);
    console.log(this.hours+":"+this.minutes+":"+this.seconds);
};

myClock.prototype.updateTime=function(secs){
    this.seconds+=secs;
    if(this.seconds>=60){
        this.minutes++;
        this.seconds=0;
    }
    if(this.minutes>=60){
        this.hours++;
        this.minutes=0;
    }
    if(this.hours>=24){
        this.hours=0;
    }

};

var clock=new myClock();
clock.run();
