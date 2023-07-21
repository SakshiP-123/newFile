var mobile=function(model_no,price,color){
    this.model_no=model_no;
    this.price=price;
    this.color=color;
    this.details=function(){
        document.write(this.model_no,this.price,+this.color)
    }
}
var samsung=new mobile(1,4000,"red");

samsung.details()