let clock = document.getElementById("clock")

setInterval(function(){
let date = new Date();
clock.innerHTML=date.toLocaleTimeString();
// clock.innerHTML = date.toDateString();
},1000)