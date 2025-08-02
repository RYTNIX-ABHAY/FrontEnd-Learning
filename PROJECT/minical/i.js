const button = document.querySelector('button');

// add listener
button.addEventListener('click',()=>{
    // fetch data
    const num1 = document.getElementById('first');
    const num11=Number(num1.value);
    const num2 =document.getElementById('sec');
    const num22 =Number(num2.value);
    // show result
    res=num11+num22;
    const result =document.getElementById('res');
    result.innerHTML="Result:"+res;

})