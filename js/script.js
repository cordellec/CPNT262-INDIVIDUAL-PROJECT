// Variables //
let digimonArray = [];

let digimonHTML = [];

const body = document.getElementById("champions");

// Function //

async function fetchData() {
  const response = await fetch("https://digimon-api.vercel.app/api/digimon");
  const data = await response.json();
  digimonArray = data;
}

// Async Function with Map and HTML //
async function mapper() {
  let champions = digimonArray.filter((i) => i.level === "Champion");

  champions.map((i) => {
    let imagePath = i.img.toString();

    let container = `<div class="container">
        <h1 class="name">${i.name}</h1>
        <p>${i.level}</p>
        <img src=${imagePath}>
      </div>`;
    digimonHTML.push(container);
  });
}

// Async functions to be excecuted in async order //

async function printData() {
  await fetchData();
  await mapper();
  body.innerHTML = digimonHTML.join("");
}

// Excecution //

printData();
