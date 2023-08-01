/* Ejercicio 1*/
const name_input = document.getElementById("name_input");
const container = document.getElementById("container");

const search_pokemon = async (pokemon_name) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`, requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .catch(error => console.log('error', error));
  
}

const show = async () => {
    let pokemon = await search_pokemon(name_input.value.toLowerCase())
    console.log(pokemon)
    container.innerHTML = `
      <h1>Pokemon: ${pokemon.name}<h1>
      <p>
        <span>Tipo: ${tipo(pokemon.types)}</span>
      </p>
    `
}

function tipo(types) {
    let string = "";
    for (let i = 0; i < types.length; i++) {
        console.log(types[i].type.name);
        string += "(" + types[i].type.name + ")";
    }
    return string
}

/*Ejercicio 2 */
const name_input2 = document.getElementById("name_input2");
const container2 = document.getElementById("container2");

const search_book = async (book_name) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    return await fetch(`http://openlibrary.org/search.json?q=${book_name}`, requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .catch(error => console.log('error', error));
  
}

const showBook = async () => {
    console.log("Cargando...");
    let book = await search_book(name_input2.value.toLowerCase());
    console.log(book)
    container2.innerHTML = `
      <h1>Libro: ${book.q}<h1>
      <img src="${book.docs[0].isbn}">
      <p>
        <span>Autores: ${book.docs[0].author_name}</span>
      </p>
    `
}

/*Ejercicio 3 */
const name_input3 = document.getElementById("name_input3");
const container3 = document.getElementById("container3");

const search_autor = async (autor_name) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    return await fetch(`http://openlibrary.org/search.json?author=${autor_name}`, requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .catch(error => console.log('error', error));
  
}

const showBooks = async () => {
    console.log("Cargando...");
    let autor = await search_autor(name_input3.value);
    console.log(autor);
    container3.innerHTML = `
      <h1>Autor: ${autor.docs[0].author_name}<h1>
      <p><span>Libros: ${librosAutor(autor)}</span>
      </p>
    `
    console.log(autor.docs.length);
}

function librosAutor(autor) {
  let string = "";
  for (let i = 0; i < autor.docs.length; i++) {
      console.log(autor.docs[i].title);
      string += (i+1)+".(" + autor.docs[i].title + ")"+ " ";
  }
  return string
}

/*Ejercicio 4 */
const name_input4 = document.getElementById("name_input4");
const container4 = document.getElementById("container4");

const search_gender = async (artis_name) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    return await fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artis_name}`, requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .catch(error => console.log('error', error));
  
}

const showGender = async () => {
    console.log("Cargando...");
    let artis = await search_gender(name_input4.value);
    console.log(artis);
    container4.innerHTML = `
      <h1>Autor: ${artis.artists[0].strArtist}<h1>
      <p><span>Libros: ${artis.artists[0].strGenre}</span>
      </p>
    `
}

/*Ejercicio 5 */
const name_input5 = document.getElementById("name_input5");
const container5 = document.getElementById("container5");

const search_films = async (people_id) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    return await fetch(`https://swapi.dev/api/people/${people_id}`, requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .catch(error => console.log('error', error));
  
}

const showfilms = async () => {
  console.log("Cargando...");
  let poeple = await search_films(name_input5.value);
  console.log(poeple);
  let string = "";
  let peli;
  for (let i = 0; i < poeple.films.length; i++) {
  peli = await titulos(poeple.films[i]);
    string += (i+1)+".(" + peli.title + ")"+ " ";
  }
  console.log(string);
    container5.innerHTML = `
    <h1>Personaje: ${poeple.name}<h1>
      <p><span>Peliculas: ${string}</span>
    </p>
  `
}

const titulos = async (url) => {
return await fetch(url)
  .then(response => response.text())
  .then(result => JSON.parse(result))
  .catch(error => console.log('error', error));
}


/*Ejercicio 6 */

const showpokemons = async () => {
    const container6 = document.getElementById("container6");

    let URL = "https://pokeapi.co/api/v2/pokemon/";

    for (let index = 1; index < 151; index++) {
        await fetch(URL + index)
            .then((responde) => responde.json())
            .then(data => mostrarPokemon(data))
    }
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
    container6.append(div);
}

/* Ejercicio 7 */
const name_input7 = document.getElementById("name_input7");
const name_input8 = document.getElementById("name_input8");
const container7 = document.getElementById("container7");
let API_KEY = "pCYxNv99VR18wioZFmrr5K4Tj6b8gkmd4N8ZfDB0";

const search_asteroides = async (START_DATE, END_DATE) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    return await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`, requestOptions)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .catch(error => console.log('error', error));
  
}

const showAsteorides = async () => {
    console.log("Cargando...");
    let asteoride = await search_asteroides(name_input7.value, name_input8.value);
    console.log(asteoride);
    let fechas=[];
    let asteroides = [];
    let contador = 0;
    fechas  = Object.keys(asteoride.near_earth_objects);
    console.log(fechas)
    for (let i = 0; i < fechas.length; i++){
      console.log(fechas[i]);
      for (let j = 0; j < asteoride.near_earth_objects[fechas[i]].length; j++) {
        if (asteoride.near_earth_objects[fechas[i]][j].is_potentially_hazardous_asteroid) {
          asteroides[contador] = asteoride.near_earth_objects[fechas[i]][j].name;
          console.log(asteoride.near_earth_objects[fechas[i]][j].name);
          contador++;
        }
      }
    
    }
    container7.innerHTML = `
        <h1>Asteroides potentes: ${asteroides}<h1>
      `
}