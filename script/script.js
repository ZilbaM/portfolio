//MENU BURGER 
if (window.location.pathname == "/index.html") {
    
    document.getElementById('contact-link').addEventListener('click', function () {
        menu_toggle();
        document.getElementById('home-link').classList.remove('active');
        document.getElementById('home-link').parentElement.classList.remove('active');
        document.getElementById('contact-link').classList.add('active');
        document.getElementById('contact-link').parentElement.classList.add('active');
    });
    if (window.location.hash == "#contact-link"){
        document.getElementById('contact-link').classList.add('active');
        document.getElementById('contact-link').parentElement.classList.add('active');
    }
    else{
        document.getElementById('home-link').classList.add('active');
        document.getElementById('home-link').parentElement.classList.add('active');
    }
}


var menu_icon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');

function menu_toggle() {
    menu.classList.toggle('active');
};
menu_icon.addEventListener('click', menu_toggle);

//Slider and Anchor Links

var scroll = document.querySelector('.scroll-container');
var wrapper = document.querySelector('.wrapper');

function anchorChange(index) {
    [].slice.call(scroll.children).forEach(function (ele, index) {
        ele.classList.remove('active');
    });
    scroll.children[index].classList.add('active');
}

var timer = null;
wrapper.addEventListener('scroll', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
        [].slice.call(wrapper.children).forEach(function (ele, index) {
            if (Math.abs(ele.getBoundingClientRect().top - wrapper.getBoundingClientRect().top) < 10) {
                anchorChange(index);
            }
        });
    }, 200);
});