import generateJoke from "./generateJoke";
import smiley from "./assets/7111.jpg";
import "./styles/main.scss";

const flageImage = document.getElementById("flagImage");
flageImage.src = smiley;

const jokeBtn = document.getElementById("btnJoke");

jokeBtn.addEventListener("click", generateJoke);
