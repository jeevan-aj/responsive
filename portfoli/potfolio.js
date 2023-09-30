function validateemail(){
    var email = document.getElementById("email");
    var regex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(regex)){
        return true;
    }
    
    else{
        alert("check email format");
        email.style.border = "2px solid red";
        return false;
    }
}

function validate(){
    var username = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var message = document.getElementById("message111");
    var label = document.getElementById("username-label");
    var regx = /^[a-zA-Z0-9.!@#$%&*]+@[a-zA-Z0-9-]+(?:\.[a-zA-z0-9-]+)*$/;
    if(username.value.trim()=="" || email.value.trim()=="" || phone.value.trim()=="" || message.value.trim()==""){
        alert("enter all boxes please");
    }
    else if(phone.value.length<3){
        alert("is your phone number correct");
        phone.style.border = "3px solid red";
        
        label.style.display = "block";
        
    }
    else if (!validateemail()){
        //
    }
    
    
    else{
       alert("message sent");
    }
    


}





