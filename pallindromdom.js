function pallindron()
{
    var b=document.getElementById("hii").value
    var rev=0;
    var rem;
    var temp=b;
    while(temp>0){
        rem=temp%10;
        //rev=rev*10+rem;
        temp=parseInt(temp/10);
        rev=rev*10+rem;
      
    }
    
    if(b==rev){
        document.write("pallindron")
    }
    else{
        document.write(" not pallindron")
      }
    
}