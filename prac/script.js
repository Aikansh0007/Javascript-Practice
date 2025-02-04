// let btn=document.createElement("button");
// btn.innerText="Click me";
// btn.style.backgroundColor="red";
// btn.style.color="white";
// document.querySelector("body").before(btn);

// let para=document.querySelector("p");

//Events
let btn=document.getElementById("btn1");
// btn1.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);

    
// }

// let div=document.querySelector("#div1");
// div.onmouseover=(e)=>{
//     // console.log("Mouse is over div");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

// btn.addEventListener("click",()=>{
//     console.log("Button was clicked Handler 1")
// });

// btn.addEventListener("click",()=>{
//     console.log("Button was clicked Handler 2")
// });

// const handler3=()=>{
//     console.log("Button was clicked Handler 3")
// };
// btn.addEventListener("click",handler3);



// btn.addEventListener("click",()=>{
//     console.log("Button was clicked Handler 4")
// });

// btn.removeEventListener("click",handler3);

let modeBtn=document.querySelector("#mode");
let mode="light";

modeBtn.addEventListener("click",()=>{
   if(mode=="light"){
       mode="dark";
       document.body.style.backgroundColor="black";
   }
   else{
    mode="light";
    document.body.style.backgroundColor="white";
   }
})