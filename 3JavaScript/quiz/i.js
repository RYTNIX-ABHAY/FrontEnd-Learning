// acces the form (bubbling)
const form = document.querySelector('form');
const ans = {
    que1:"abhay",
    q2:"21"
}
// event
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data = new FormData(form);
    // console.log(data);
    let result =0;
    for(let [key,value] of data.entries()){
        if(ans[key]===value){
            result++;
        }
    }
    console.log(result);

})
