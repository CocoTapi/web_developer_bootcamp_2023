const button = document.querySelector("button");
const jokeLists = document.querySelector("#jokes");

const addNewJoke = async () => {
    try {
        const jokeText = await getDadJoke();
        const newLi = document.createElement('li');
        newLi.innerText = jokeText;
        jokeLists.append(newLi);
    } catch (e) {
        return "Error";
    }
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json"} };
        const res = await axios.get ("https://icanhazdadjoke.com/", config);
        return res.data.joke;   // return the joke text
    } catch (e) {
        return "There is no more joke. Sorry :("
    }
}

button.addEventListener('click', addNewJoke);