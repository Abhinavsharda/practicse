/**
* FileName: app.js
*
* @author Abhinav sharda
* @date June 9, 2016
* StudentID: 300868625
* website: Assigment 2
* @description This contain javascript 
*/ 
  //create  a link for sending form
   var sendButton = document.getElementById("sendButton");
   
   sendButton.addEventListener("click", sendButtonClick);
   
   function sendButtonClick(event) {
       console.log("pressed!");
   }
   // creating link to all the field
   var fullName = document.getElementById("fullName");
   var email = document.getElementById("Email");
   var cNumber = document.getElementById("ContactNumber");
   var message = document.getElementById("Message");

   //a refrence to form
   var contactmeform = document.getElementById("contactmeform");
    
    contactmeform.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("posted");
        console.log("Full Name: " + fullName.value);
        console.log("Email: " + email.value);
        console.log("Contact Number: " + cNumber.value);
        console.log("Message: " + message.value);
        contactmeform.reset();
    });
    

    
var write = [
    "Abhinav Sharda",
    "I was born in India on may 07,1997. I was born and raised in middle class family.our family has great affection with animals so we are always ready help any needy animals. I persuade all my studies in CBSE .having agreat intrest in computers made me to decide to came canada for my higher qualification in the technology field. I hope to get a good job in this field.",
    "Projects",
    ];
 
(function(){
 
   var keys = []
    keys[0] = document.getElementById('Name');
    keys[1] = document.getElementById('Portfolio');
    keys[2] = document.getElementById('projects');
    
    for (var i = 0; i < keys.length; i++) {
        
        if (keys[i]){
            keys[i].textContent = write[i];}}  
})();