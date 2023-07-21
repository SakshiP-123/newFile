//sort

var a=["sakshi","rohan","atharva"]
document.write(a +"<br>")
a.sort()
document.write(a+"<br>")


//reverse
a.reverse()
document.write(a+"<br>")

//push or pop

var a=["sakshi","rohan"]
a.push("patil")
document.write(a)

a.pop()
document.write(a+"<br>")


//shitf-to delete 1st position element
//unshift- add

var c=["abc","Pqr","xyz"]
c.shift()
document.write(c)



var c=["abc","Pqr","xyz"]
c.unshift("rtr")
document.write(c)


//concat-to add two seperate arrays 
var a=["sakshi","Patil"]
var b=["siddhu","Patil"]
var d=a.concat(b)
document.write(d+"<br>")

//join-internally connect element

var p=["sakshi","Patil"]
var c=p.join("$")
document.write(c+"<br>")


//slice
var z=["sakshi","rohan","abc","Pqr","xyz"]
var a=z.slice(1,4)
document.write(a+"<br>")

//splice

var z=["sakshi","rohan","abc","Pqr","xyz"]
var b=z.splice(2,0,"rina")
document.write(b)

var z=["sakshi","rohan","abc","Pqr","xyz"]
z.splice(2,1,"rina")
document.write(z)