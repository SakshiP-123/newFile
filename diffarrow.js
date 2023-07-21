/*

//diff arrow and nornal function
hello()
function hello(){
    var a=10;
    document.write(a)
}
//arrow function

hello()//it will not work
hello=()=>{
var b=40;
document.write(b)
}
hello()//it will work

//2.


function sakshi(a,a)
{
    document.write(a)
}
sakshi(10,10)


//arrow

sakshi=(a,a)=>{
    document.write(a)
}
sakshi(10,10)
*/


//3
/*
var car=function(){
this.color="red";
this.details=function(){
    document.write(this.color)
}
}
var innova=new car()
innova.details()//whole code run properly
*/

var car=()=>{
    this.color="red";
    this.details=function(){
        document.write(this.color)
    }
    }
    var innova=new car()
    innova.details()

