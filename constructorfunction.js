

var car=function(){
    this.colour="red";
    this.price=6700;
    thid.size="15 inch";

    this.details=function(){
        return this.colour+this.price+this.size;
    }
}

var bmw=new car()
var aaudi=new car()
var mercedese =new car()
document.write(bmw.price)
bmw.details()