const btn = document.querySelector('button');
let elementNumber = 0;

const addElement = () => {
    const div = document.createElement('div');
    elementNumber++;
    document.body.appendChild(div);
    div.textContent = elementNumber;
    if (elementNumber % 5 === 0) {
        div.classList.add('circle');
    }
}


btn.addEventListener('click', addElement)