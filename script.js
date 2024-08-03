let input = document.querySelector("#input-box");
let bigdiv=document.querySelector(".bigdiv");
let ul = document.querySelector("#big");
let tick = document.createElement("button");
let list = document.createElement("li");
let newbtn = document.querySelector("#newtasks");
let inputVal = input.value;


let btn = document.querySelector("button");
// let empty=()=>{
//     if(input.value='')
//         alert("write tasks first");
// }
// btn.addEventListener("click",()=>{
//     if(input.value===''){
//         alert("first enter any task");
//         tick.classList.add("donedisable");

//     }
// })

btn.addEventListener("click",()=>{
    let tick = document.createElement("button");
    tick.classList.add("donebtn");
    tick.innerText="Done";
    let list = document.createElement("li");
    let inputVal = input.value;
    list.innerText=inputVal;
ul.append(list);
list.appendChild(tick);
list.classList.add("li");
tick.addEventListener("click",()=>{
    list.classList.add("completed");
    tick.disabled=true;
    tick.classList.remove("donebtn");
    tick.classList.add("donedisable");
})


input.value='';






});



newbtn.addEventListener("click",()=>{
    ul.classList.add("liHide");
})


