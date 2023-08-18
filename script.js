var password = document.getElementById("password");
var message = document.getElementById("message");
var strength = document.getElementById("strength");
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");

password.addEventListener("input", ()=>{
    if (password.value.length > 0) {
        message.style.display = "block";
    }else{
        message.style.display = "none";
    }
    if (password.value.length < 4){
        strength.innerHTML = "weak";
        password.style.borderColor = "#ff5925";
        message.style.color = "#ff5925";
    }else if(password.value.length >= 4 && password.value.length <= 8){
        strength.innerHTML = "medium";
        password.style.borderColor = "#f2ff00";
        message.style.color = "#f2ff00";
    }else if(password.value.length >= 8){
        strength.innerHTML = "strong";
        password.style.borderColor = "#29d730";
        message.style.color = "#29d730";
    }
    if(password.value.length == 0){
        password.style.borderColor = "#ccc";
    }
})

hide1.addEventListener("click", ()=>{
      password.type = "text";
})

hide2.addEventListener("click", ()=>{
    password.type = "password";
})