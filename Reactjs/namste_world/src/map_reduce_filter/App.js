import "./App.css";
let arr=[2,3,4,5,5];
//we are passing only element in this function
function mapping(ele){
    return ele*2;//returning the element
}
//creating a new array
//map contain three parameter element ,index and array
let new_arr=arr.map(mapping)
console.log("printing first array");
console.log(new_arr)

let arr2=[];
//*-------------------------*
// function for_each(ele){
//     //inserting element in arr2
//     arr2.push(ele*5);
// }

//for eacth
//element ,index and array
// arr.forEach((for_each))
//*-----------------------*
arr.forEach(function(ele){
    arr2.push(ele*10);
})
console.log("printing first array2")
//printing second array
console.log(arr2);



//filter
//filter are generaly use to filter the each element 
//it will return true or false value acoording to condition
//it will not effect our origin array
var number=[2,32,4,51,46,8];
const new_number=number.filter(function(num){
    return num>10 //condition
});
console.log("filter");
console.log(new_number);

//reduce funtion
//reduce is used when we want to reduce all elements of an array into one single variable
let num2=number.reduce(function(accumulator,curr_num){
    console.log(accumulator,curr_num);
    return accumulator+curr_num;
});
console.log(num2);
function App() {
  return (
    <>
       
    </>
  );
}
export default App;
