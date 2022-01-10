import Animate from './animate.mjs';

const slider = document.querySelector('#slider');
const panel = slider.querySelector('.panel');
const btns = slider.querySelectorAll('.btns li');
const ring = slider.querySelector('#ring');

btns.forEach((el, index)=>{
    el.addEventListener('click', e=>{
        e.preventDefault();

        let isOn = e.currentTarget.classList.contains('on');
        if(isOn) return;

        activation(index);
    })
})

function activation(index){
    new Animate(panel,{
        prop: 'margin-left',
        value: `${-100*index}%`,
        duration: 1000
    })

    for(let btn of btns) btn.classList.remove('on');
    btns[index].classList.add('on');

    ring.className='';
    ring.classList.add('rot'+index);
}