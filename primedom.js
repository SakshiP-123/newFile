function helo(){
    var num=document.getElementById("new1").value;
    var temp=0;
    
    for(i=2;i<=num-1;i++){
        if(num%i==0){
            temp=temp+1;

        }
    }
    if(temp>0){
        document.write("not a prime")
    }
    else{
        document.write(" prime") 
    }
}
