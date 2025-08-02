// let x=fetch('http://api.weatherapi.com/v1/current.json?key=369f8f16f7354ab59bb134105252402&q=Lucknow&aqi=yes');
// console.log(x);
//  const pro = x.then((y)=>{
    // console.log(y);
    // console.log(y.json()); wait

//     const pro = y.json();
//     pro.then((xx)=>{
//    console.log(xx);
//     })
// return y.json();
// })
// pro.then((xx)=>{
//        console.log(xx);
//         })
let x=fetch('http://api.weatherapi.com/v1/current.json?key=369f8f16f7354ab59bb134105252402&q=Lucknow&aqi=yes');
x
.then((res)=>res.json())
.then((data)=>console.log(data))
.then((data)=>console.log(data.location.region));
