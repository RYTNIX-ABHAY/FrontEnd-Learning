// selsectors
// 1: id sel
// const obj1 = document.getElementById('y');
// console.log(obj1);
// obj1.innerHTML='xxnx';
// 2 class name sel
// const obj2 = document.getElementsByClassName("ok");
// obj2[0].innerHTML='okkklll';
// console.log(obj2);

// 3 querry selector
// const obj3 = document.querySelector('#ul li ');
// obj3.innerHTML='2343'
// console.log(obj3);
// const x=document.querySelector(".ok");
// console.log(x);
// x.innerHTML='okkk'

// create element
// const x =document.createElement('li');
// x.innerHTML="abhay";
// const i = document.getElementById("ul");
// i.appendChild(x);
// // y.append(x,x +"2.0");
//text node
// const l = document.createTextNode("abhay");
// const y = document.getElementById("ul");
// y.append(l);
// attribute 
const x= document.createAttribute("id");
x.value="abhay";
const y = document.querySelector("ul li");
y.setAttributeNode(x);

