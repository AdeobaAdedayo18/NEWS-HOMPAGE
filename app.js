const menuMobile = document.getElementById("menu-mobile");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const mainWrapper = document.querySelector(".main-wrappper");


menuOpen.addEventListener("click", e=>{
    console.log("add is the problem");
    menuMobile.classList.remove("close");
    setTimeout(() => {
        menuMobile.classList.add("move");

    }, 10);
    document.querySelector('.main-wrapper').classList.add('blur');
    
    
})
menuClose.addEventListener("click", e=>{
    console.log("add is the problem");
    menuMobile.classList.remove("move");
    setTimeout(() => {
        menuMobile.classList.add("close");
    }, 300);    
    document.querySelector('.main-wrapper').classList.remove('blur');
})

document.addEventListener("click", (event) => {
    if (!menuMobile.contains(event.target) && !menuOpen.contains(event.target)) {
        menuMobile.classList.remove("move");
        setTimeout(() => {
            menuMobile.classList.add("close");
        }, 300);  
        document.querySelector('.main-wrapper').classList.remove('blur');
        
    }
});




