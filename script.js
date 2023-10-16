const fnameError = document.getElementById('fname-error')
const lnameError = document.getElementById('lname-error')
const phoneError = document.getElementById('phone-error')
const emailError = document.getElementById('email-error')
const zipError = document.getElementById('zip-error')
const submitError = document.getElementById('submit_error')

function validateFname(){
    const name1 = document.getElementById('fname').value;

    if(name1.length == 0){
        fnameError.innerHTML = "Name is required";
        return false;
    }
    if(!name1.match(/^[A-Za-z]*$/)){
        fnameError.innerHTML = "Letters only";
        return false;
    }
    fnameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #43e563;"></i>';
    return true;
}

function validateLname(){
    const name2 = document.getElementById('lname').value;

    if(name2.length == 0){
        lnameError.innerHTML = "Name is required";
        return false;
    }
    if(!name2.match(/^[A-Za-z]*$/)){
        lnameError.innerHTML = "Letters only";
        return false;
    }
    lnameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #43e563;"></i>';
    return true;
}

function validatePhone(){
    const phone = document.getElementById('phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone number Required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Number must have 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Numbers only";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #43e563;"></i>';
    return true;
}

function validateEmail(){
    const email = document.getElementById('email').value

    if(email.length == 0){
        emailError.innerHTML = 'Email Required';
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)){
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #43e563;"></i>';
    return true;


}

function validateZip(){
    const zip = document.getElementById('zip').value

    if(zip.length == 0){
        zipError.innerHTML = 'Zip code Required';
        return false;
    }


    if(zip.length !== 5){
        zipError.innerHTML = 'Zip must have 5 digits';
        return false;
    }

    zipError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #43e563;"></i>';
    return true;
}

function validateForm(){
    if(!validateFname() || !validatePhone() || !validateLname() || !validateEmail() || !validateZip()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please Fill all requied fields correctly';
    setTimeout(function(){submitError.style.display = 'none';}, 3000)
    return false;
} }