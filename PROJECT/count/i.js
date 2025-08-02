const date= document.getElementById('x');
date.style.fontSize="100px";


const coming= new Date("2028-07-14 00:00:00");





function greet(){
    const now = new Date();
    const datee= coming-now;
    const dates= Math.floor( datee/(1000*60*60*24));
const hours=Math.floor( datee/(1000*60*60)%24);
const min = Math.floor(datee/(1000*60)%60);
const sec = Math.floor(datee/(1000)%60);
    date.innerHTML=(`${dates} Days \t ${hours} Hours ${min} Minutes ${sec}seconds`);
}
setInterval(greet,1000);
greet();

