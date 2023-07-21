var a=[10,20,30,40];
document.write(a+"<br>")
var b=a.map(hello)
document.write(b)

function hello(c){
    return c*10;
}