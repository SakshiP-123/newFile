

function hello()//function declarartion
{
    document.write("hello world")
}
hello()


//addition function code

function add()
{
    var a=10;
    var b=10;
    var c=a+b;
    document.write("addition is :"+c)
}
add()



//addition using parameter

function add(a,b){
    var c=a+b;
    document.write("addition is :"+c)
}
add(30,80)


function sqaure(a){
    var c=a*a;
    document.write("Square is:"+c)
}
sqaure(4)



function cube(a){
    var c=a*a*a;
    document.write("cube is :"+c)
}
cube(6)


function sub(a,b){
    var c=a-b;
    document.write("subtraction is :"+c)
}
sub(8,2)

function mul(a,b)
{
    var c=a*b;
    document.write("multiplication is :"+c)
}
mul(2,3)

function div(a,b){
    var c=a/b;
    document.write("division is :"+c)
}
div(4,2)



//default parameter ***imp


function hello(a,b=60)
{
    document.write(b)
}

hello(10)



//button function
 function add(){
    var a=10;
    var b=20;
    var c=a+b;
    document.write("addition is:"+c)

 }

 function cube(){
    var a=10;
    var c=a*a*a;
    document.write("cube is :"+c)
 }

 function square(){
    var a=10;
    var c =a*a*a;
    document.write("square is:"+c)
 }

 function sub(){
    var a=4;
    var b=2
    var c=a-b;
    document.write("subtraction is :"+c)
 }


 function mul(){
    var a=2;
    var b=6;
    var c=a*b;
    document.write("multiplication is :"+c)
 }