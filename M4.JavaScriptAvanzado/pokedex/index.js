const pokemones = document.querySelector("#pokemones");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let index = 1; index < 1011; index++) {
    fetch(URL + index)
        .then((responde) => responde.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(pokemon) {
    let image = pokemon.sprites.front_default;

    let tipos = pokemon.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name.toUpperCase()}</p>`);
    tipos = tipos.join('');

    let abili= pokemon.abilities.map((ability) => `<p class="${ability.ability.name} abilities">${ability.ability.name}</p>`);
    abili=abili.join('');

    let move= pokemon.moves.map((move) => `${move.move.name}, `);
    move=move.join('');
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <div class="pokemon-img">
            <img src="${image}" alt="">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="id">#${pokemon.id}</p>
                <h2 class="nombre">${pokemon.name}</h2>
            </div>
            <div class="tipos">
                ${tipos}
            </div>
        </div>
        <button class="primary" onclick="window.dialog${pokemon.id}.showModal();">Mas info</button>

        <dialog id="dialog${pokemon.id}">
            <p>Peso: ${pokemon.weight}</p>
            <p>Altura: ${pokemon.height}</p> 
            <h3>Habilidades:</h3>
            ${abili}
            <h3>Movimientos:</h3>
            <p>${move}.<p>
            <a href="#box${pokemon.id}" class="link-2"></a>
	        <button onclick="window.dialog${pokemon.id}.close();" aria-label="close" class="x">❌</button>
        </dialog>
        
    `;
    pokemones.append(div);
}
/* <div class="box" id="box${pokemon.id}">
            <a href="#m2-o" class="link-1" id="m2-c">Mas info</a>
            <div class="modal-container" id="m2-o" style="--m-background: hsla(0, 0%, 0%, .4);">
                <div class="modal">
                    <h2 class="nombre">${pokemon.name}</h2>
                    <p>Peso: ${pokemon.weight}</p>
                    <p>Altura: ${pokemon.height}</p> 
                    <h3>Habilidades:</h3>
                    ${abili}
                    <h3>Movimientos:</h3>
                    <p>${move}.<p>
                    <a href="#box${pokemon.id}" class="link-2"></a>
                </div>
            </div>
        </div> */
const form = document.getElementById("form");

form.addEventListener("submit", e=> {
    e.preventDefault();
    pokemones.innerHTML = "";
    let valor = document.getElementById("nombre-pokemon").value;
    console.log(valor);
    search_pokemon(valor.toLowerCase())
        .then(function (result) {
            let pokemon = JSON.parse(result)
            mostrarPokemon(pokemon);
    })
    .catch(error => console.error('error', error));
})


function search_pokemon(pokemon_name) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`, requestOptions)
           .then(response => response.text())
  
}

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})
