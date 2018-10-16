

var button = document.getElementById("button");
var rainbow="0123456789ABCDEF";

button.addEventListener("click",mixingColors);

function mixingColors(){
  var changing = "";
for(var i=0; i<6; i++){
    changing += rainbow[Math.floor(Math.random()*16)];
}
document.body.style.backgroundColor= "#"+changing;
}  

