import { handleClick } from "./handler.js";

export const jokeButton = document.querySelector('.getJoke');
export const jokeHolder = document.querySelector('.joke p');

jokeButton.addEventListener('click', handleClick);