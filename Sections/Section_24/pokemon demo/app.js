//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for ( let i = 1; i <= 151; i++){
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon'); //Don't use "="
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img')
    newImg.src = `${baseLink}${i}.png`;

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}

