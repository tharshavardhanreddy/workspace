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

var mybike = {
    maxspeed : 80,
    driver : "jhyhg",
    drive: function(s,t){
        console.log(s*t);
    },
    
};
console.log(mybike);