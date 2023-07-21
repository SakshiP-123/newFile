var laptop=function(){
    this.color="red";
    this.price=4500;
    this.size="15 inch screen";
}
var hp=new laptop()
document.write(hp.color)

//other example

var car=function(){
    this.model=1; 
    this.color="blue";
    this.type="automatic"; //this keyword refers to current object
}
var bmw=new car()
document.write(bmw.color)
