const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const amineNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
    try {
        animeImgEl.src = "spinner.svg";
        const response = await fetch("https://api.unsplash.com/photos/random?client_id=CkFO60TcgMR858-Cf0V_iIXrNGaRMVGS17HJwh-0bNo&query=car");
        const data = await response.json();
        btnEl.innerText = "Get Cars";
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.links.download;
        amineNameEl.innerText = data.alt_description;
      } catch (error) {
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Get car";
        amineNameEl.innerText = "An error happened, please try again";
      }
});