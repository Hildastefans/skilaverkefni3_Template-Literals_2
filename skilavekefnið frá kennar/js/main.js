console.log(“Virkar!“)
var button = document.querySelector(“button”);
button.onclick = function(){
   document.body.style.backgroundColor = “#”+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10);
}
