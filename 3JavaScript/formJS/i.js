
console.log("JS Loaded!"); 
const form =document.querySelector('form');
// event
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data = new FormData(form);
    for(let [key,value] of data.entries()){
        console.log(`${key}: ${value}`);
    }
})