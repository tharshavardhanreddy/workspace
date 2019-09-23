var links = document.getElementsByTagName("a");

for (i=0;i<links.length;i++){
    links[i].className = "link-" + i;
}

function a (a,b){
    var a =(2+b);
    console.log(a);
    return a;

}
var b = a(7,8);
console.log(b+10);