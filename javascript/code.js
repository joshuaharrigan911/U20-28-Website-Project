function check(){
var name =  document.getElementById("cname").value;
var num =  document.getElementById("ccnum").value;
var expm =  document.getElementById("expmonth").value;
var expy =  document.getElementById("expyear").value;
var cvv =  document.getElementById("cvv").value;
if (name==""){
alert("please enter your name!");
}
if (num==""){
alert("please enter your card number!");
}
if (expm==""){
alert("please enter expiry month!");
}
if (expm>=13){
alert("please enter a valid month!");
}
if (expy==""){
alert("please enter your expiry year!");
}
if (cvv==""){
alert("please enter your cvv!");
}
}
