function laptop(color,price){
    return{
        color:color,
        price:price,
        details:function(){
       document.write("laptop color is :"+color)
       
       document.write("laptop price is:"+price)
        }
    }
}
var hp=laptop("blue",67000)
hp.details()


