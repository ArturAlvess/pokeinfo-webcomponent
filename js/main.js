'use strict'

const buttonList = () => {
    const listPokemon = document.querySelector('.button-pokedex');

    listPokemon.onclick = function () {


        const pokemonCount = 151
        const colors = {
            fire: '#FDDFDF',
            grass: '#DEFDE0',
            electric: '#FCF7DE',
            water: '#DEF3FD',
            ground: '#f4e7da',
            rock: '#d5d5d4',
            fairy: '#fceaff',
            poison: '#98d7a5',
            bug: '#f8d5a3',
            dragon: '#97b3e6',
            psychic: '#eaeda1',
            flying: '#F5F5F5',
            fighting: '#E6E0D4',
            normal: '#F5F5F5'
        }

        const mainTypes = Object.keys(colors);
        const getPokemons = async (id) => {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            const response = await fetch(url)
            const data = await response.json()
            createPokemonCard(data)

        }

        const fetchPokemons = async () => {
            for (let i = 1; i <= pokemonCount; i++) {
                await getPokemons(i)
            }
        }

        const createPokemonCard = (pokemon) => {
            const card = document.createElement('div')
            card.classList.add('pokemon')

            const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

            const pokeTypes = pokemon.types.map(type => type.type.name)
            const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1)
            // const color = colors[type]

            // card.style.backgroundColor = color


            const pokemonInnerHTML = `
        <div class="poke__container poke-menu" id="poke__container">

        <div class="img-container">

        <img class="pokeimage" 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
        alt="${name}">

        </div>

            <div class="infos">
                <h3 class="pokename">${name}</h3>
                <small class="type">Type: <span>${type}</span></small>
            </div>
            
            
        </div>
        `




            card.innerHTML = pokemonInnerHTML;
            const pokeContainer = document.querySelector('.main-container');
            pokeContainer.appendChild(card)
            pokeContainer.style.display = 'flex'
        }

        fetchPokemons()


    }
}
buttonList()


const exit = () => {
    const buttonSair = document.querySelector('.logo-img')
    buttonSair.onclick = function () {
        window.location.href = 'http://127.0.0.1:5500/'
    }
}
exit();

