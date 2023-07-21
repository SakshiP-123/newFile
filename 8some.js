var a=[10,20,30,40];

document.write(a+"<br>")
var b=a.some(hello);
document.write(b+"<br>")

function hello(c){
    return c>20;
}

if(b==true){
    document.write("condition true")
}
else{
    document.write("false")
}