var links = document.getElementsByTagName("a");

for (i=0;i<links.length;i++){
    links[i].className = "link-" + i;
}

function a (a,b){
    var a =(a+b);
    console.log(a);

}
a(7,8);