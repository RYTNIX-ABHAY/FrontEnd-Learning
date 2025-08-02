document.addEventListener('click',(event)=>{
    const circle = document.createElement('div');
    circle.className='cir';
    const x=event.clientX;
    const y=event.clientY;
    circle.style.left=`${x}px`
    circle.style.top=`${y}px`
    const col = [
        "#DC143C", // Crimson
        "#008080", // Teal
        "#FFD700", // Gold
        "#4B0082", // Indigo
        "#40E0D0", // Turquoise
        "#FA8072", // Salmon
        "#808000", // Olive
        "#E6E6FA", // Lavender
        "#FF7F50", // Coral
        "#708090"  // Slate Gray
      ];
      circle.style.backgroundColor=col[Math.floor(Math.random()*col.length)]
   // innerhtml
   const messages = [
    "Believe",
    "Focus",
    "Smile",
    "Breathe",
    "Shine",
    "Create",
    "Explore",
    "Achieve",
    "Inspire",
    "Thrive"
  ];
  circle.textContent=messages[Math.floor(Math.random()*messages.length)];
    document.body.appendChild(circle);
    setTimeout(()=>{
        circle.remove();
    },5000)
})
// setInterval(()=>{},2000);