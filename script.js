
var btnNav = document.getElementById('btnNav');
btnNav.addEventListener('click', abrirnav)
var check = Boolean(false)
function abrirnav(){
    
    if(check == false){
        console.log('ok')
        document.getElementById('navBar').style.display = 'block'
        check = true
    } else {
        console.log('Não ok')
        document.getElementById('navBar').style.display = 'none'
        check = false
    }
}

