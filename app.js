const btnMobile = document.getElementById('iconeMenu')

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}