document.body.addEventListener('mousemove', e => {
    gsap.to('.pointer', {
        x: e.clientX,
        y: e.clientY,
        stagger: -0.04,
    })
})

let numberdots = document.querySelector('#number');
numberdots.value = 20;
let size = document.querySelector('#size');
size.value = 100;

let topColor = document.querySelector('#topColor');
let bottomColor = document.querySelector('#bottomColor');
let midColor = document.querySelector('#midColor');

let selectionColor = document.querySelector('.selectionColor');
let pointers = document.getElementsByClassName('pointer')

let container = document.querySelector('.container');

numberdots.addEventListener('change', (e) => {
    let numd = e.target.value;
    if (numd < 2) {
        numberdots.value = 2;
    }
    container.innerHTML = '';
    for (let i = 0; i < numd; i++) {
        container.innerHTML += `<div class="pointer"></div>`
    }
    for (i = 0; i < pointers.length; i++) {
        pointers[i].style.backgroundImage = `linear-gradient(${topColor.value}, ${midColor.value}, ${bottomColor.value})`;
    }
})
size.addEventListener('change', (e) => {
    let nums = e.target.value;
    if (nums < 5) {
        size.value = 5;
    }
    for (i = 0; i < pointers.length; i++) {
        pointers[i].style.backgroundImage = `linear-gradient(${topColor.value}, ${midColor.value}, ${bottomColor.value})`;
    }
    // console.log(nums);
    container.style.width = `${nums}px`;
    container.style.height = `${nums}px`;
})

topColor.value = "#ffc0cb";
midColor.value = "#ffa500";
bottomColor.value = "#ff0000";
selectionColor.addEventListener('change', (e) => {
    console.log(pointers);
    for (i = 0; i < pointers.length; i++) {
        pointers[i].style.backgroundImage = `linear-gradient(${topColor.value}, ${midColor.value}, ${bottomColor.value})`;
    }

})

