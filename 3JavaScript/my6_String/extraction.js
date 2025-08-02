// extraction by slicing ans substring
let str ="helo bhai kaese ho?";
// 1. slicing 
console.log(str.slice(1,4)); // 4 not included
console.log(str.slice(-9,-6)); // negative is also possible {.......-4-3-2-1}

// 2.substring
console.log(str.substring(1,4)); // neg is not possible




// replace
let str2 ="hi bhai kaesa hai bhai?";
console.log(str2.replace("bhai","dost"));
console.log(str2.replaceAll("bhai","dost"));


//split
// used to make an array form string
let str3=`abhay bauva pallu bubu`;
console.log(str3.split(" "));

// trim suruat aur end se space htana

let str4=`  abhay singh `;
console.log(str4.length);
console.log(str4.trim().length);  //.trimstart .trimend


