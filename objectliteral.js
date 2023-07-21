var car={};
car.maruti=6788
car.hyundai=9099
car.audi=8999
car.total=function(){
    return car.maruti+car.audi;
}


document.write(car.total())

//other Example

var bike={};
bike.color="red"
bike.bmw=9000
bike.model=421
bike.details=function() {
    return bike.color+bike.bmw;
}
document.write(bike.details())