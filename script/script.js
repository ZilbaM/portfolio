//MENU BURGER 

var menu_icon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');

function menu_toggle(){
    menu.classList.toggle('active');
};
menu_icon.addEventListener('click', menu_toggle);


//Slider and Anchor Links

var scroll = document.querySelector('.scroll-container');
var wrapper = document.querySelector('.wrapper');

function anchorChange(index){
    [].slice.call(scroll.children).forEach(function (ele, index){
        ele.classList.remove('active');
    });
    console.log(scroll.children[index]);
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