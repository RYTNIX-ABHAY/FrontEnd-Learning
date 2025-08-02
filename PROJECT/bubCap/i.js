const root =document.getElementById('root');
const bd = document.querySelector('body');
root.addEventListener('click',(event)=>{
   bd.style.backgroundColor=event.target.id;
});