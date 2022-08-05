const btnMobile = document.getElementById('iconeMenu')

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

/*==========================*/
const fecha = document.getElementById('fechar');
fecha.addEventListener('click', fechacon);
function fechacon(){
    rifa.style.display='none'
}
/*==========================*/

function insert(num){
    rifa.style.display='block'
    rifaN.innerHTML = "Rifa N° " + num;
}

