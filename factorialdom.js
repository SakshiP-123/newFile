function hi()
{
    var n=document.getElementById("sum").value;
    var fact=1;
    for( i=1;i<=n;i++){
    fact=fact*i;
    }
    document.write(fact)
}