generate();

async function generate(){
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single');
    const data = await response.json();
    document.getElementById('para').innerHTML = data.joke;
}

