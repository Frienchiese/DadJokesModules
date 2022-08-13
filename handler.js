import { fetchJokes } from "./lib.js";
import { jokeButton, jokeHolder } from "./jokes.js";
import { randomItemFromArray } from "./utils.js";
import { buttonText } from "./texts.js";

export async function handleClick() {
    const { joke } = await fetchJokes();
    jokeHolder.textContent = joke
    jokeButton.textContent = randomItemFromArray(
      buttonText,
      jokeButton.textContent,
    );
}