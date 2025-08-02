const acc= document.getElementById('yes');
acc.addEventListener('click',(event)=>{
    // console.log(event.target.id);  return the inside value
    // input inner html show
    let input= document.getElementById('inp');
    let btnValue = event.target.id; // Get clicked button ID

    if (btnValue === "Ac") {
        input.value = ""; // Clear input properly
    } 
    // ab mujhe ek last de del krna hai
    else if(btnValue === "CL"){
      input.value = input.value.slice(0,-1);
    }
    // async error lga lete hai!
    else if (btnValue === "=") {
        try {
            //resullt...
            input.value = eval(input.value);

        } catch (error) {
            input.value = "Error"; 
        }
    } 
    // updtae krte rho inp ko
    else {
        input.value += btnValue;

    }
    
})