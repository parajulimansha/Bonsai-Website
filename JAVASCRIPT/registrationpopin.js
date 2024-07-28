const popup= document.querySelector(".popup")
const close= document.querySelector(".close")



 window.addEventListener("load",function(){

 	//showpopup();	

 	setTimeout(function(){
 		popup.classList.add("show");
 	},2000)

 })



close.addEventListener("click",function(){
	popup.classList.remove("show");
})

function check(){
		var FirstName=document.forms['form']['fname'].value;
		var LastName=document.forms['form']['lname'].value;
		var Phone=document.forms['form']['phone'].vaue;
		var Email=document.forms['form']['email'].value;
		

		if(FirstName=="" || LastName=="" || Phone=="" || Email=="")
		{
			alert("Please look for the empty field.");

		}
		else
		{
			alert("You've been registered.");
			
			
		}
	}
