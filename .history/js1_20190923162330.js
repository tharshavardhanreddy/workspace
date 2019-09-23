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

var bike = new bike();

   bike.maxspeed = 120,
   bike.driver = "Harsha",
    bike.drive = function(speed , time){
        console.log(speed*time);

    };

console.log(bike.maxspeed);
bike.drive(60,5);

