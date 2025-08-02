// for creation 
const react ={
    createElement : function(tag,styl,text){
          const ele =document.createElement(tag);
          for(let key in styl){
            ele.style[key]=styl[key];
          }
          if( typeof text==='object'){
            for(let val of text){
                ele.append(val);
            }
          }else{
          ele.innerHTML =text;
          }return ele;
    }
}
// for render 
const reactdom ={
    append: function(ele,root){
        root.append(ele);
    }
}
const he1 = react.createElement("h1",{fontSize:"50px", color:"red"},"hello");
const lii1 =react.createElement("li",{},"HTML");
const li2 =react.createElement("li",{},"CSS");
const li3 =react.createElement("li",{},"JS");

const li1= react.createElement("ul",{fontSize:"40px"},[lii1,li2,li3]);

const a= reactdom.append(he1,document.querySelector(".ok"));
const b = reactdom.append(li1,document.querySelector(".ok"));




// const div = document.querySelector(".ok");
// div.append(he1);