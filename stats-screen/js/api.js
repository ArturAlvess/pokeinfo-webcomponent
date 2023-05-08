// -------------- Variaveis globais ------------------------------
const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');

const pokemonImage = document.querySelector('.pokemon__image');
const pokemonGif = document.querySelector('.poke-gif');

const pokemonHP = document.querySelector('.hp-stats')
const pokemonDEFF = document.querySelector('.deff-stats')
const pokemonSpAtt = document.querySelector('.sp-att-stats')
const pokemonAtt = document.querySelector('.att-stats')
const pokemonSpeed = document.querySelector('.speed-stats')
const pokemonSpDeff = document.querySelector('.sp-deff-stats')

const pokemonType = document.querySelector('.type-name')
const pokemonType2 = document.querySelector('.type-name2')
const form = document.querySelector('.form');
const input = document.querySelector('.input-search');
// -----------------------------------------------------------------

const getPokemon = async (pokemon) => {

    const responseAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    if (responseAPI.status == 200) {
        const data = await responseAPI.json();
        return data;
    }

}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';

    const data = await getPokemon(pokemon)

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;

        pokemonHP.innerHTML = data.stats[0].base_stat;
        pokemonAtt.innerHTML = data.stats[1].base_stat;
        pokemonDEFF.innerHTML = data.stats[2].base_stat;
        pokemonSpAtt.innerHTML = data.stats[3].base_stat;
        pokemonSpDeff.innerHTML = data.stats[4].base_stat;
        pokemonSpeed.innerHTML = data.stats[5].base_stat;

        pokemonType.innerHTML = data.types[0].type.name.toUpperCase();
        pokemonType2.innerHTML = data.types[1].type.name.toUpperCase();


        pokemonGif.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`
        pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
        input.value = ''
    } else{
        pokemonName.innerHTML = 'Not found :(';
        pokemonNumber.innerHTML = '??';
        pokemonGif.src = './img/pokebola.gif'
        pokemonImage.src = './img/not_found.png';

        pokemonHP.innerHTML = ''
        pokemonAtt.innerHTML = ''
        pokemonDEFF.innerHTML = ''
        pokemonSpAtt.innerHTML = ''
        pokemonSpDeff.innerHTML = ''
        pokemonSpeed.innerHTML = ''

        pokemonType.innerHTML = 'NOT'
        pokemonType2.innerHTML = 'FOUND'
    }


}

form.addEventListener('submit', (event) => {

    event.preventDefault();

    renderPokemon(input.value);


})

renderPokemon('1')