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