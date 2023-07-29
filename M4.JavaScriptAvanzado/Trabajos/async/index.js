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
