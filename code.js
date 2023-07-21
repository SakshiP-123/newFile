var car=function(color){
    this.color=color;
    this.price=price;
    this.getinfo=function(){
        document.write(this.color+this.price)
    }
}

var maruti=new car("blue")
var swift=new car("pink")
swift.getinfo();
maruti.getinfo();