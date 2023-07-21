class parent{
    detail(){
        return "i am from parent class"
    }
}

class child extends parent{
    detail1(){
        return " I am from child class"
    }
}

var a=new parent()
var b=new child()
document.write(a.detail())
document.write(a.detail1())
document.write(b.detail())
document.write(a.detail1())
