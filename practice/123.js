const Add=document.querySelector('.add')
const Update=document.querySelector('.update')
const Delete=document.querySelector('.delete')
const input=document.querySelector('.form1 input');
console.log(input)
// console.log(Add)
const content=input.value;
console.log(content)
Add.addEventListener('click',(e)=>{
    e.preventDefault();
    const ss= `<form class="form1">
    <input type="text" placeholder="enter favorite name">
    <button class="update">UPDATE</button>
    <button class="delete">DELETE</button>
</form>`
const Form=document.createElement('form');
Form.innerHTML=ss;
const Box=document.querySelector('.box');
console.log(Box)
Box.append(Form);
console.log(Box);

})

