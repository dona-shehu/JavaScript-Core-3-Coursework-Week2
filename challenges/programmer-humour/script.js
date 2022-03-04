let image = document.querySelector(".img")
fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        image.src = data.img;
    })
    .catch((error) => console.log("This is an error"))

