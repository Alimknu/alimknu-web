const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchForm = document.getElementById("search-form");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonImageContainer = document.getElementById("image-container");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const getPokemonData = async () => {
  try {
    const pokemonToFetch = searchInput.value.toLowerCase();
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonToFetch}`);
    const data = await res.json();

    pokemonName.textContent = `${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`;
    pokemonId.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    pokemonImageContainer.innerHTML = `
        <img id="sprite" src="${data.sprites.front_default}" alt="${data.name}" />
    `;
    types.innerHTML = data.types.map((type) => `<span class="type ${type.type.name}">${type.type.name}</span>`).join("");

    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;
  } catch (err) {
    console.log(err);
    resetDisplay();
    alert("Pokémon not found");
  }
};

const resetDisplay = () => {
  if (pokemonImageContainer.innerHTML !== "") {
    pokemonImageContainer.innerHTML = "";
  }

  pokemonName.textContent = "";
  pokemonId.textContent = "";
  pokemonImageContainer.innerHTML = "";
  weight.textContent = "";
  height.textContent = "";
  types.innerHTML = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getPokemonData();
});
