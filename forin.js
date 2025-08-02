// const obj={
//     name:`abhay `,
//     class:`btech`,
//     id:23201
// }
// // console.log(obj);
//  // for in loop 
//  for(let key in obj){
//     console.log(key, obj[key]);
//  }

// const obj={
//     name:`abhay`,
//     cal:23201
// }
// const obj2=Object.create(obj);
// obj2.x=21;
// // console.log(Object.keys(obj2));
// for(let key in obj2){
//     console.log(key,obj2[key])
// }




// key value writable enumerable configurable 

const obj ={
    name:`abhay`
}


// console.log(Object.getOwnPropertyDescriptor(obj ,"name"));
Object.defineProperty(obj ,'name',{
     writable:false

})
console.log(Object.getOwnPropertyDescriptor(obj ,"name"));

// obj.name=`baba`;
// console.log(obj);  ab change nhi krerga !
