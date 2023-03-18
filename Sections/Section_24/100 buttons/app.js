//Create 100 buttons with text in div

const div = document.querySelector('div');

for (let i = 0; i < 100; i++) {
    const newButtons = document.createElement('button');
    newButtons.innerText = "CLICK";
    div.appendChild(newButtons);
}