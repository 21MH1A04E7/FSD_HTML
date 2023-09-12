//clone
const ul=document.querySelector(".todo-list");
console.log(ul);
const li=document.createElement("li");
console.log(li);
li.textContent="colne";
ul.append(li);
// const li2=document.createElement("li");
// li2.textContent="colne";
//cloneNode
// simple clone
// li2=li.cloneNode();
li2=li.cloneNode(true);
ul.prepend(li2);