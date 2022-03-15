function getDogUrl(){
    const apiURL = 'https://dog.ceo/api/breeds/image/random';
    return fetch(apiURL)
        .then((response) => response.json())
        .then((jsonResponse) => {
            if(jsonResponse.code === 404) return Promise.reject("No dog found")
            else return jsonResponse.message;
        });
}

function addDogToList(dogURL) {
    const list = document.querySelector("ul");
    const listElement = document.createElement("li");
    const image = document.createElement("img");
    image.src = dogURL;
    list.appendChild(listElement);
    listElement.appendChild(image)
}
const button = document.querySelector(".btn")

button.addEventListener("click", (e) => {
    getDogUrl()
        .then((dogURL) => addDogToList(dogURL))
        .catch((error) => {
            const dog404Placeholder = './dog-placeholder.jpg';
            addDogToList(dog404Placeholder);
        });
});