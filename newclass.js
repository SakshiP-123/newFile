var Country=function(President,Game,Currency,animal){
    this.President=President;
    this.Game=Game;
    this.Currency=Currency;
    this.animal=animal;
    this.details=function(){
        var c=this.President;
        var d=this.Game;
        var e=this.Currency;
        var f=this.animal;
        document.getElementById("new").innerHTML="Color:"+c+"<br>"+"Game:"+d+"<br>"+"Currency:"+e+"<br>"+"Animal:"+f;
        }
}

var India=new Country("Modi","Hockey","RUPEES","Tiger")
var Australia=new Country("Scott","Football","AUD","Kangaroo")
var England=new Country("Rishi Sanak","Cricket","Pound","Barbary Lion")
var Dubai=new Country("Sheikh Mohammad","Football","UAE Dirham","Arabian oryx")
function hello1(){
    India.details()
    

}
function hello2(){
    Australia.details()
}

function hello3(){
    England.details()
}

function hello4(){
    Dubai.details()
}