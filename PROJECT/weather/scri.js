document.querySelector('button').addEventListener('click',()=>{
   
    let place=document.getElementById('p').value;
   function wet(data){
    let input =document.getElementById('res');
    input.innerHTML=`temp is ${data.current.temp_c}`;
   }


    fetch(`http://api.weatherapi.com/v1/current.json?key=369f8f16f7354ab59bb134105252402&q=${place}&aqi=yes`)
     .then((res)=>res.json())
     .then((data)=>wet(data));
})
//done