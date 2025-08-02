 const obj = document.getElementById('q');

// function come()
// {

// }
// setInterval(come,1000);
const butt = document.querySelector("button");

  

// color change in body
// const bd=document.querySelector('body');
const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Opportunities don't happen, you create them. – Chris Grosser",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "Dream big and dare to fail. – Norman Vaughan",
  "Difficulties in life are intended to make us better, not bitter. – Dan Reeves",
  "Don't let yesterday take up too much of today. – Will Rogers",
  "Stay hungry, stay foolish. – Steve Jobs"
];
// for whole web page...
document.addEventListener('keydown',()=>{
 
  let index =Math.floor(Math.random()*quotes.length);
  obj.textContent=quotes[index];

});
// for any button!
butt.addEventListener('click',()=>{
 
  let index =Math.floor(Math.random()*quotes.length);
  obj.textContent=quotes[index];

});







// function col(){
// const colors = [
//     "#1E293B",  // Dark Blue Gray (Good for backgrounds)
//     "#4F46E5",  // Indigo (Great for primary buttons)
//     "#22C55E",  // Emerald Green (Fresh & modern)
//     "#FACC15",  // Yellow (Eye-catching highlights)
//     "#F43F5E",  // Rose Red (Vibrant call-to-action)
//     "#14B8A6",  // Teal (Soothing and elegant)
//     "#3B82F6",  // Blue (Classic & trustworthy)
//     "#9333EA",  // Purple (Creative & unique)
//     "#FB923C",  // Orange (Warm & energetic)
//     "#64748B"   // Slate Gray (Neutral & professional)
//   ];
//   let indd = Math.floor(Math.random()* colors.length);
//   bd.style.backgroundColor=colors[indd];
// }
// setInterval(col,1000);