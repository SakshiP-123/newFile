function hello(a){
    document.write(a)
}
hello(10)


//
function hello(a){
    document.write(a)   
}
hello(10,30,40,50)

//

function hello(...a){//rest parameter
    document.write(a)   
}
hello(10,30,40,50)


//

function hello(b,...a){
    document.write(b)   
}
hello(10,30,40,50)


//
function hello(b,...a,c){//rest parameter
    document.write(b)   
}
hello(10,30,40,50)
