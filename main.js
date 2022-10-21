const btn = document.querySelector('.btn1')
const btn1 = document.querySelector('.btn2')

const inp = document.querySelector('.ft')

let integer = 0;

btn.addEventListener('click',() => {
    integer += 1
    inp.innerHTML = integer
})
btn1.addEventListener('click',() =>{
    integer -= 1
    inp.innerHTML = integer
})