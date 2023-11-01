const myButton = document.createElement('button');

document.body.appendChild(myButton);

myButton.textContent = 'Change Background Color';

function changeBackgroundColor() {
    let myArray = ['#68BBE3', '#0E86D4', '#055C9D', '#003060'];

    const colors = myArray[Math.floor(Math.random() * myArray.length)];

    document.body.style.backgroundColor = colors;
}

myButton.addEventListener('click', changeBackgroundColor);