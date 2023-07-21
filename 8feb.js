var a=[10,20,30,40,50];
document.write(a)
var b=a.filter(hello);
document.write(b)

function hello(c){
    return c>30;
}