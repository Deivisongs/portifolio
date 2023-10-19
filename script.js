const btn = document.getElementById('btnNav');
const nav = document.getElementById('nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    console.log(nav.style.display)
})
