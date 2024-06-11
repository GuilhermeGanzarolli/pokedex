

//const pokemon = 'bulbasaur'
//const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`


function convertPokemonToHtml(pokemon) {
    return`
    <li class="pokemon">               
        <div class="nomeEnumero">
            <span>${pokemon.name}</span>
            <span>#002</span>
        </div>
        <div class="AtaqueEImg">
            <ul class="habilidades">
                <li>grama</li><br>
                <li>veneno</li>
            </ul>
            <img class="img-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </div>
    </li>
    `
}

const pokemonListNoHtml = document.getElementById('pokemons')


poke_api.getPokemons().then((lista = [])=>{//Neste momento eu tenho a lista com os pokemons

    const novaLista = lista.map((pokemon)=>{
        return convertPokemonToHtml(pokemon)
    })


    const newHtml=novaLista.join('')
    pokemonListNoHtml.innerHTML+=newHtml



    //.catch((error)=>console.log(error))
    //.finally(function(){
    //    console.log('Requisição concluída!')
    //})


//
//fetch(url)
//    .then(function(response){
//        return response.json()
//    })
//    .then(function(jsonBody){
//        console.log(jsonBody)
//    })
//    .catch(function(error){
//        console.log(error)
//
//    })
//    .finally(function(){
//        console.log('Requisição concluída!')
    })
