/* JS FOR SIGN IN PAGE */

var nameerror = document.getElementById('name-error');
var emailerror = document.getElementById('email-error');
var phoneerror = document.getElementById('phone-error');

function checkname(){
    var name = document.getElementById('cont-name').value;

    if(name.length==0){
        nameerror.innerHTML="Name is Required.";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML="Write Full Name.";
        return false;
    }
    nameerror.innerHTML= '<i class="fa-solid fa-circle-check" style="color: #65e6aa;font-size:25px;"></i>';
    return true;
}
function checkemail(){
    var email = document.getElementById('cont-email').value;
    
    if(email.length==0){
        emailerror.innerHTML="Email is Required.";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\[0-9]*[@][A-za-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML="Email  Invalid.";
        return false;
    }
    emailerror.innerHTML= '<i class="fa-solid fa-circle-check" style="color: #65e6aa;font-size:25px;"></i>';
    return true;
}


function checkphone(){
    var phone = document.getElementById('cont-phone').value;

    if(phone.length==0){
        phoneerror.innerHTML="Phone Number is Required.";
        return false;
    }
    if(phone.length !==10){
        phoneerror.innerHTML="Phone Number should be 10 digits.";
        return false;
    }
    phoneerror.innerHTML= '<i class="fa-solid fa-circle-check" style="color: #65e6aa;font-size:25px;"></i>';
    return true;
}

//POP UP SCRIPT

const popupBox = document.querySelector(".main"),
popupBox2 = document.querySelector(".img"),
popupBox3 = document.querySelector("body");

let popup = document.getElementById('popup');

function openpopup(){
    popupBox.classList.add("show");
    popupBox2.classList.add("show2");
    popupBox3.classList.add("show3");

    popup.classList.add("open-popup");
}