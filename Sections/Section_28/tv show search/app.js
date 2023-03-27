const form = document.querySelector('#searchForm');
const body = document.querySelector('body');
const imgContainer = document.createElement('section');
document.body.append(imgContainer);



form.addEventListener('submit', async function (e) {
    e.preventDefault();
    imgContainer.innerHTML = '';
    const searchTerm = form.elements.query.value
    const config = { params: { q: searchTerm } }
    const res = await axios.get('https://api.tvmaze.com/search/shows', config)
    const shows = res.data;
    makeImages(shows);
    form.elements.query.value = '';  //don't forget this!
})

const makeImages = (shows) => {

    for (let result of shows) {
        if (result.show.image) {
            const newImg = document.createElement('img');
            newImg.src = result.show.image.medium;
            imgContainer.append(newImg)
        }
    };
}