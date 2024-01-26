const header = document.querySelector("#navigation");
const navigation = document.querySelector("#shopping");
const body = document.querySelector("main");

window.addEventListener("scroll", function(){
    if(navigation.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
});