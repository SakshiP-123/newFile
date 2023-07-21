function person(first,last,age,eye){
    this.first=first;
    this.last=last;
    this.age=age;
    this.eye=eye;
this.details=function(){
    return this.first+this.last+this.age+this.eye;
}
}

var m1=new person("sakshi","Patil",21,"brown");
m1.details()