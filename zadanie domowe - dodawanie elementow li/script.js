const btn = document.querySelector('button');
let number = 1;
const ulList = document.querySelector('ul');

btn.addEventListener('click', () => {
  const newLiElement = document.createElement('li');
  ulList.appendChild(newLiElement);
  newLiElement.textContent = number;
  if (number % 3 === 0) {
    newLiElement.classList.add('big');
  }
  number += 2;
})