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