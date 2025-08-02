 
let turn ='o';
let total_turn =0;
let winner =[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
let board_ar = new Array(9).fill('e');
function check(){
    for(let [ind0,ind1,ind2]of winner){
         if(board_ar[ind0]!='e'&&board_ar[ind0]===board_ar[ind1]&&board_ar[ind0]===board_ar[ind2]){
            return 1;
         }
    }
    return 0;
}
const mainnn=(event)=>{
 
    const element = event.target;
    if(board_ar[element.id]=='e'){
        total_turn++;
    if(turn==='0'){
    element.innerHTML='o';
    board_ar[element.id]='o';
    if(check()){
           document.getElementById("win").innerHTML="winner is o";
           board.removeEventListener('click',mainnn);
           return;
    }
    turn='x';
    }
  else{
  element.innerHTML='x';
  board_ar[element.id]='x';
  if(check()){
    document.getElementById("win").innerHTML="winner is x";
    board.removeEventListener('click',mainnn);
    return;
}
  turn='0';
    }
    if(total_turn===9){
        document.getElementById("win").innerHTML="Draw";
    }
    }
};

const board = document.querySelector(".board");
board.addEventListener('click',mainnn);

const but =document.getElementById("but");
but.addEventListener("click",()=>{
    const cell=Array.from(document.getElementsByClassName("cell"));
    cell.forEach(element => {
        element.innerHTML="";
    });
    turn='o';
    total_turn=0;
    board_ar=new Array(9).fill('e');
    document.getElementById("win").innerHTML=" ";
    board.addEventListener('click',mainnn);
});
