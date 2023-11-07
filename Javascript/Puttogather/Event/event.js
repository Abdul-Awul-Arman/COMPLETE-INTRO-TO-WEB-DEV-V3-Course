// let button=document.querySelector(".event-button");

// button.addEventListener("click",function(){
//     alert("bismillahffdfdsfsff");
// })

// let input=document.querySelector(".input");
// let text=document.querySelector(".text");

// input.addEventListener("keyup",function(){
//    text.innerText=input.value;
// });

// let input=document.querySelector(".input");
// let color=document.querySelector(".my-div");

// input.addEventListener("change",function(){
    
//     color.style.backgroundColor=input.value;
// })

let   div=document.querySelector(".button-container").addEventListener("click",function(event){
    alert(`You Click button No ${event.target.innerText}`);
});