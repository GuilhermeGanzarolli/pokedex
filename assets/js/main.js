

//const pokemon = 'bulbasaur'
//const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`


const pokemonListNoHtml = document.getElementById('pokemons')
const btncarregar = document.getElementById('loadMore')
const limit = 12
let offset = 0


function CarregarMaisPokemons() {
    poke_api.getPokemons(offset, limit).then((lista = [])=>{//Neste momento eu tenho a lista com os pokemons
        const novoHtml = lista.map((pokemon) => 
            `
                <li class="pokemon ${pokemon.type}">               
                    <div class="nomeEnumero">
                        <span>${pokemon.name}</span>
                        <span>#${pokemon.number}</span>
                    </div>
                    <div class="AtaqueEImg">
                        <ul class="habilidades ">
                            ${pokemon.types.map((type) => `<li>${type}</li>`).join('<br>')}
                        </ul>
                        <img class="img-pokemon" src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            `
        ).join('')
        pokemonListNoHtml.innerHTML+=novoHtml
    })
}

CarregarMaisPokemons(offset,limit)

btncarregar.addEventListener('click', ()=>{
    offset+=limit
    CarregarMaisPokemons(offset,limit)
})
