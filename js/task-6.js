"use strict";
const boxes = document.querySelector("#boxes");
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');


createButton.addEventListener('click', () => {
  const amount = document.querySelector('#controls input').value
  createBoxes(amount)
});

destroyButton.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (isNaN(amount) || amount <= 0 || amount > 100) {
    alert("Please enter a valid positive number");
    return
  }
  destroyBoxes()
  let size = 30;
  for (let index = 0; index < amount; index++) {
    const color = getRandomHexColor();
    boxes.insertAdjacentHTML("beforeend",  
    `<div class = "square" 
      style = "width: ${size}px; height: ${size}px; background-color: ${color};">
    </div>`);
    size += 10;
  }
  document.querySelector('#controls input').value = '';
}


function destroyBoxes() {
  boxes.innerHTML = '';
}