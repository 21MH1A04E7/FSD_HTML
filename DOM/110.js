//get multiple items using querySelectorAll
const navItems=document.querySelectorAll(".nav-item")
console.log(navItems)//it will return the nodelist
//simple for loop
//for of loop
//forEach loop
// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     //chaning the background color into red
//     const tags1=navItems[i];
//     tags1.style.backgroundColor="yellow";
//     tags1.style.fontWeight="bold";
// }
// for(let tag2 of navItems){
//     tag2.style.backgroundColor="blue";
//     tag2.style.fontStyle="italic";
// }
navItems.forEach((tag2)=>{
    tag2.style.backgroundColor="red";
    tag2.style.fontStyle="italic";
})