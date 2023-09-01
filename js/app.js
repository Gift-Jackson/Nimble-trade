const loader = document.querySelector(".loader");
const toggle = document.querySelector(".toggle-box");
const toggleBar = document.querySelector(".toggle");
const menu = document.querySelector("nav");
const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", ()=>{
    if(scrollY > lastScroll){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active")
    }

})

window.addEventListener("load", ()=>{
    loader.style.display = 'none';
});

toggle.addEventListener("click", ()=>{
    toggleBar.classList.toggle("active")

    if(toggleBar.classList.contains("active")){
        menu.classList.add("active")
    }
    else{
        menu.classList.remove("active")
    }
})