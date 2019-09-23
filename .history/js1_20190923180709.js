// var links = document.getElementsByTagName("a");

// for (i=0;i<links.length;i++){
//     links[i].className = "link-" + i;
// }

// function a (a,b){
//     var a =(a+b);
//     console.log(a);
//     return a;

// }
// var b = a(7,8);
// console.log(b+10);

// var mybike = new Object();

//    this.distance = 80,
//    mybike.maxspeed = 120,
//    mybike.driver = "Harsha",
//     mybike.drive = function(speed , time){
//         console.log(speed*time);

//     };
//     console.log(mybike.maxspeed);
//     console.log(distance);
// mybike.drive(60,5);

// var mybike = {
//     maxspeed : 80,
//     driver : "jhyhg",
//     drive: function(s,t){
//         console.log(s*t);
//     },
    
// };
// console.log(mybike);


var car = function(maxspeed, driver){
    this.maxspeed = maxspeed,
    this.driver = driver,
    this.logd = function(){
        console.log("print driver name/n" + driver);
    }
};

var mycar =new car(120 , "Hrithik");
var mycar2 = new car(110, "Rohit");

mycar.logd()