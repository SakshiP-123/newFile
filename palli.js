function palno()
{
    
    
    var rem,temp,final=0;
    var number=document.getElementById("hii").value;
    temp=number;
    while(number>0){
        rem=number%10;
        //rev=rev*10+rem;
        number=parseInt(number/10);
        final=final*10+rem;
      
    }
    
    if(final==temp){
        document.write("pallindron")
    }
    else{
        document.write(" not pallindron")
      }
    
}