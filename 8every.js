var a=[20,30,40,50];
document.write(a+"<br>")
var b=a.every(hello)
document.write(b+"<br>")

function hello(c){
    return c>10
}

if(b==true){
    document.write("every element satisfy")
}
else{
    document.write("false")
}