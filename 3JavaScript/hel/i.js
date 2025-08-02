function call(o){
    console.log("talking to domino's");
    setTimeout(()=>{
        console.log("placed");
        o();
    },2000)
}
// call();
function pre(o){
    console.log("preparing");
    setTimeout(() => {
        console.log("prepartion succesful");
        o();
    }, 5000);
}
// pre();
function delivery(o){
    console.log("waiting for delivery boy !");
    setTimeout(()=>{
        console.log("picked up ");
        o();
    },2000)
}

function send(){
    console.log("reaching to man")
    setTimeout(() => {
        console.log("done");
        
    }, 2000);
}

// call back hell
call(()=>{
    pre(()=>{
delivery(()=>{
    send();
})
    })
})
