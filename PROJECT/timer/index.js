function st(){
const date = document.getElementById('x');
const time= new Date();
const xy= time.toLocaleTimeString();
date.innerHTML = xy;
}
setInterval(st,1000);
const date = document.getElementById('x');
date.style.fontSize="100px";
