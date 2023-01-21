document.querySelector('.menu').addEventListener('click', ()=> {
    document.querySelectorAll('.target').forEach((item) =>{
        item.classList.toggle('change')
    })
})


const icons = document.querySelectorAll('.section-1-icons i');

let index = 0;

setInterval(() => {
    icons.forEach(icon => icon.classList.remove('change'));
    icons[index].classList.add('change');

    index++;

    if (index >= icons.length) {
        index = 0;
    }
}, 4000);