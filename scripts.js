let mobileNav = document.querySelector(".mobile-nav");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let closeMenu = document.querySelector(".close-menu");


function noscroll() {
    window.scrollTo(0, 0);
}

hamburgerMenu.addEventListener("click", function() {
        closeMenu.style.visibility = 'visible'
        mobileNav.classList.add("open");
        window.addEventListener("scroll", noscroll);
    });

closeMenu.addEventListener("click", function() {
        closeMenu.style.visibility = 'hidden'
        mobileNav.classList.remove("open");
        window.removeEventListener("scroll", noscroll);
})

amountValue = (userInp) => {
    document.getElementById("cus_amount").value = userInp;
    return (userInp)
}

customValue = () => {
    newValue = document.getElementById("cus_amount").value;
    if ((newValue !== "") && newValue !== undefined) {
        return(true);
    }
    else {
        return(false);
    }
}


validName = () => {
    nameInp = document.getElementById("cus_name").value;
    if ((nameInp !== "" )&& (nameInp !== undefined)) {
        if (nameInp.match(/^[A-Za-z\s]*$/)) {
            return(true);
        }
        else {
            return(false);
        }
    }
    else {
        return(false);
    }
    
}

isValid = () => {
    amount = document.getElementById("cus_amount").value;
    cusName = document.getElementById("cus_name").value;
    email = document.getElementById('cus_email').value;

    if ((customValue()) && (validName()) && (donEmail())) {
        alert(`Hello! ${cusName} you have decided to donate $${amount} today! thank you very much email reciept will be sent to ${email}`);
        
    }
    else if ((!customValue()) || (validName()) && (donEmail())){
        alert("Please Enter a valid Amount (USD)");
    }
    else if ((!validName()) || (customValue()) &&  (donEmail())){
        alert("Please Enter a Valid Name (A-Z Only)");
        
    }
    else if ((customValue()) && (validName()) || (!donEmail())) {
        alert("Please Enter a Valid Email");
    }
}

function donEmail(){
    const email = document.getElementById('cus_email').value
    if(email.length == 0){
        // emailError.innerHTML = 'Email Required';
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)){
        // emailError.innerHTML = "Email Invalid";
        return false;
    }
    else
    // emailError.innerHTML = '';
    return true;
}