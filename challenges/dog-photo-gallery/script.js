let paragraph = document.getElementById("element");
let button = document.querySelector(".btn");
function onClick(event){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function (response) {
            return response.json();

        })
        .then(function (data) {
            console.log(data)
            let list = document.querySelector(".list")
            let listItem = document.createElement("li")
            let img = document.createElement("img");
            img.src = data.message;
            list.appendChild(listItem);
            listItem.appendChild(img)   
        })
        .catch((error) => console.log("Image not found"))
};
button.addEventListener("click",onClick)