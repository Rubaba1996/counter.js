let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let h1 = document.querySelector("h1");
let zero = document.getElementById("zero");
let num = 0;
let fontSize = 32;

btn1.addEventListener("click",()=>{
    zero.innerHTML = `<span style = "font-size:${fontSize}px">${++num}</span>`
    btn1.classList.add("purple");
});
btn2.addEventListener("click",()=>{
    zero.innerHTML = `<span style = "font-size:${fontSize}px">${--num}</span>`
    btn2.classList.add("purple");
});
btn3.addEventListener("click",()=>{
    zero.innerHTML=`<span style = "font-size:${fontSize}px">${num+=5}</span>`
    btn3.classList.add("purple");
});
btn4.addEventListener("click",()=>{
    zero.innerHTML=`<span style = "font-size:${fontSize}px">${num-=5}</span>`
    btn4.classList.add("purple");
});

function randomColor(){
    let r1 = Math.floor(Math.random()*255);
    let r2 = Math.floor(Math.random()*255);
    let r3 = Math.floor(Math.random()*255);
    return `rgb(${r1},${r2}, ${r3})`;
}

btn5.addEventListener("click",()=>{
    zero.style.color = randomColor();
    btn5.classList.add("purple");
});
 
btn6.addEventListener("click",()=>{
   zero.innerHTML = `<span style="font-size:${fontSize++}px">${num}</span>`
   btn6.classList.add("purple");
});

btn7.addEventListener("click",()=>{
    zero.innerHTML = `<span style = "font-size:${fontSize--}px">${num}</span>`
    btn7.classList.add("purple");
});