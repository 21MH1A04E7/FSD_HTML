var a=18;
    a=20;
  document.write("value a is:",a);
var name="hariom";
document.write("<br>");
   document.write(name);
   document.write("<br>");
   document.write(name.length);
name+=" kumar";
document.write("<br>");
document.write(name);
document.write("<br>");
document.write(name.length);
//typeof is used to find the data type of that variable
var num=10;
document.write("<br>");
    document.write("data type of num :",typeof(num));
var check=true;
document.write("<br>");
    document.write(typeof(check));
//console.logn is used to display the output in console bar
document.write("<br>");
var str="hariom";
document.write(str);
document.write("<br>");
console.log(num);
document.write("data type of ",typeof(str));
//alert is used to diaplay the value in alert bar
alert("hii it will be harmfull for you so open it on your risk");
window.alert("hi");
//array concetp arr is object 
document.write("<br>");
var arr=[34,56,7];
document.write(arr);
document.write("<br>");
console.log(arr);
document.write("<br>");
document.write(typeof(arr));
document.write("<br>");
//boject declearation
var obj={
    'name':'hariom',
    'rollno':'21mh1a04e7',
    'branch':'ece'
}
document.write(obj.name);
console.log(obj.name);
console.log(obj.rollno);
console.log(obj.branch);
console.log(typeof(obj));
console.log(typeof(obj.name));
//decleation of two or more than two objec
var details=[{
    'name':'hariom',
    'rollno':'21mh1a04e7',
    'branch':'ece'
},{
    'name':'vijya',
    'rollno':'21mh1a04h2',
    'branch':'ece'
}
];
document.write("<br>");
console.log(details[0].name);
console.log(details[1].name);
document.write("<br>");
for(var key in details[0]){
    console.log(details[0][key]);
}
for(var key2 in details[1]){
    console.log(details[1][key2]);
}
for(var i=0;i<details.length;i++){
    document.write((i+1)+". "+details[i].name+" "+details[i].rollno+"<br>");
}
