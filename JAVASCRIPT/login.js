function check(){
var fullname=document.forms['form']['fullname'].value;
var Email=document.forms['form']['Email'].value;
var message=document.forms['form']['message'].value;

if(fullname=="" || Email==""){
alert("Please look for the empty field.");
}
else{
alert("Thank you for your feedback!!");
}
}