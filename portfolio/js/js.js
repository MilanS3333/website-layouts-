menu = document.getElementById('menu');
open = document.getElementById('open');
menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
// console.log(menu)

menu.addEventListener('click',menuopen)

function menuopen(){
if(open.style.left == '100%'){
    open.style.left = '0';
    menu.classList.add("active");
}
else{
    open.style.left = '100%';
    menu.classList.remove("active");
}
}

document.addEventListener('scroll', () => {
    scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }
    else{
        header.style.backgroundColor = "transparent";

    }
})
menu_item.forEach((item) => {
    item.addEventListener('click',menuopen)
});