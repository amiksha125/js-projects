const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

// Array of anime objects with name and image URL
const animes = [
    {
        name: "Naruto Uzumaki",
        img: "https://upload.wikimedia.org/wikipedia/en/9/94/Naruto_Uzumaki.png"
    },
    {
        name: "Sailor Moon",
        img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Sailor_Moon.png"
    },
    {
        name: "Goku",
        img: "https://upload.wikimedia.org/wikipedia/en/0/01/Goku_Dragon_Ball.png"
    },
    {
        name: "Luffy",
        img: "https://upload.wikimedia.org/wikipedia/en/4/47/Monkey_D_Luffy.png"
    },
    {
        name: "Deku",
        img: "https://upload.wikimedia.org/wikipedia/en/5/5a/Izuku_Midoriya.png"
    }
];

btnEl.addEventListener("click", function(){
    // Pick a random anime from the array
    const randomAnime = animes[Math.floor(Math.random() * animes.length)];

    // Update image and name
    animeImgEl.src = randomAnime.img;
    animeNameEl.textContent = randomAnime.name;

    // Show the container
    animeContainerEl.style.display = "block";
});
