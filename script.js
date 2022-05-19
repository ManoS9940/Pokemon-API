const Pokemon_container = document.querySelector("#main-container");

const PokeInput = document.querySelector("#txtbox");

const PokeSearch = document.querySelector("#Search-btn")

const fetchPokeData = async () => {
    for(i=0; i<=50; i++) {
        await getPokeData(i);
    }
}


const getPokeData = async id => {
    try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(url)
    const pokemon = await result.json();
    console.log(pokemon);
    displayPokeCard(pokemon);
        
    } catch (error) {
        console.log(error);
    }
}

fetchPokeData();

function displayPokeCard(pokemon) {
    const pokediv = document.createElement('div');
    pokediv.classList.add('pokemon');


    

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    const pokeHTML =`
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" width="40%"
    
    <div class="info">
    <p class="Name">Pokemon Name: <span class="Name">${name}</span></p>
    <p class="types">Type: <span class="Types">${pokemon.types.map(type => type.type.name)}</span></p>
    <p class="ability">Ability: <span class="Ability"> ${pokemon.abilities.map(ability => ability.ability.name)}</span></p>
    <p class="Moves">Moves: <span class="Moves">${pokemon.moves.length}</span></p>
    <p class="Weight">Weight: <span class="Weight">${pokemon.weight}</span></p>
    </div>
    </div>`;

    pokediv.innerHTML = pokeHTML;

    Pokemon_container.appendChild(pokediv);

}
PokeSearch.addEventListener("click", () => getPokeData(PokeInput.value));