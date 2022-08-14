let counter = document.querySelector('#counter');
let total = 0;
let sum = document.querySelector('.entered-num');

function plusOne() {
    counter.innerHTML = '';
    total++;
    counter.insertAdjacentHTML('beforeend', `${total}`);
}

function reset() {
    counter.innerHTML = '';
    total = 0;
    counter.insertAdjacentHTML('beforeend', `${total}`);
}

function save() {
    sum.innerHTML += ` ${total},`;
}