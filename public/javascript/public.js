const form = document.getElementById("form");
const email = document.getElementById("email");
const fullname = document.getElementById("name");
const number = document.getElementById("number");
const message = document.getElementById("message");
const errorMessage = document.getElementById("error");

form.addEventListener('submit',(e)=>{
    let messages = [];
    if(fullname.value==="" || fullname.value==null || fullname.value.length<3){
        messages.push("name needs to be more than 3 characters")
    }
    if(number.value.length<10){
        messages.push("number needs to be 10 characters")
    }
    if(messages.length>0){
        e.preventDefault();
        errorMessage.innerText = messages.join(" ,")
    }
})




