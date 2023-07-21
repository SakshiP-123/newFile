var a=10;//global variable
function hii()
{
    document.write(a)
}
hii()

function hello(){
    document.write(a)
}
hello()





var a=10;//global variable
function hii()
{
    var b=20; //local variabel
    document.write(b)
}
hii()

function hello(){
    document.write(b)
}
hello()