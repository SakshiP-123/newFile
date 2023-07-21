//primeno

var a=17;
var temp;
for( i=2;i<=a-1;i++){
    if(a%i==0){
        temp=temp+1;
    }
}
if(temp>0){
    document.write("not a prime");

}
else{
    document.write("prime");
}


//== it is useful to check value
//=== it is useful to check value + data

var a=10;
var b=10;
if(a==b){
    document.write("both equals")
}
else{
    document.write("not equal")
}


//===
var a=10;
var b="10";
if(a===b){
      document.write("both equals")
}
else{
      document.write("not")
}




