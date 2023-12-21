const navBar = document.querySelector('.main-nav')
const toggle = document.querySelector('.toggle');

navBar.classList.add('close');

toggle.addEventListener('click', ()=> {
if (navBar.classList.contains('close')) {
    navBar.classList.remove('close');

} else {
    navBar.classList.add('close');
}
});
