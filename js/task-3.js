"use strict";
const userName = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

function inputHandler(event) {
    const inputValue = event.target.value.trim();

   
    if (inputValue === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = inputValue;
    }
}

userName.addEventListener('input', inputHandler);