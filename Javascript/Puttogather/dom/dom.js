// let mySquare=document.querySelector(".red-square");
// // mySquare.style.backgroundColor="back";
// mySquare.style.width="1000px";

let mySquare=document.querySelectorAll(".js-target");

for(let i=0;i<mySquare.length;i++)
{
    const currentElement=mySquare[i];
    currentElement.innerText="arman";
}
