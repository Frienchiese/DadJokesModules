const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJokes() {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    }
  });
  const data = await response.json();
  return data;
}

async function handleClick() {
  const { joke } = await fetchJokes();
  jokeHolder.textContent = joke
  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent,
  );
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(arr.length * Math.random())];
  if(item === not) {
    return randomItemFromArray(arr, not);
  }
  return item;
}

jokeButton.addEventListener('click', handleClick);
