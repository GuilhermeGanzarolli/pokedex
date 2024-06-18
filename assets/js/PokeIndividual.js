const url = 'https://pokeapi.co/api/v2/pokemon/150';

async function chamarApi() {
    try {
        let response = await fetch(url);
        let jsonBody = await response.json();
        return jsonBody;
    } catch (error) {
        console.error('Erro ao chamar a API:', error);
    }
}
//${JSON.stringify(objectJson.name)}
function InformacoesDinamicas(objectJson) {

    const tipo = objectJson.types[0].type['name']

    const novoHtml = `
        <div id="area-pokemon">
            <div id="area-nome">
                <span >${objectJson.name}</span>
                <span >#${objectJson.id}</span>
            </div>
            <div id="area-img">
                <img id="img-pokemon"  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${objectJson.id}.svg" width="40%" alt="">
            </div>
        </div>
        <div id="area-status">
            
            <div id="lista-status">
                <div class="elemento">
                    <span class="elemento-e-valor">HP <span class="valor">${objectJson.stats[0]['base_stat']}</span></span> 
                    <span class="barra-de-progresso">
                        <div id="hp-progresso" class="progresso ${tipo}"></div>
                    </span>
                </div>
                <div class="elemento">
                    <span class="elemento-e-valor">Ataque <span class="valor">${objectJson.stats[1]['base_stat']}</span></span> 
                    <span class="barra-de-progresso">
                        <div id="ataque-progresso" class="progresso ${tipo}"></div>
                    </span>
                </div>
                <div class="elemento">
                    <span class="elemento-e-valor">Defesa <span class="valor">${objectJson.stats[2]['base_stat']}</span></span> 
                    <span class="barra-de-progresso">
                        <div id="defesa-progresso" class="progresso ${tipo}"></div>
                    </span>
                </div>
                <div class="elemento">
                    <span class="elemento-e-valor">Sp. Ataq <span class="valor">${objectJson.stats[3]['base_stat']}</span></span>  
                    <span class="barra-de-progresso">
                        <div id="spAtaq-progresso" class="progresso ${tipo}"></div>
                    </span>
                </div>
                <div class="elemento">
                    <span class="elemento-e-valor">Sp. Def <span class="valor">${objectJson.stats[4]['base_stat']}</span></span>  
                    <span class="barra-de-progresso">
                        <div id="spDefesa-progresso" class="progresso ${tipo}"></div>
                    </span>
                </div>
                <div class="elemento">
                    <span class="elemento-e-valor">Velocidade <span class="valor">${objectJson.stats[5]['base_stat']}</span></span> 
                    <span class="barra-de-progresso">
                        <div id="speed-progresso" class="progresso ${tipo}"></div>
                    </span>
                </div>
            </div>    

        </div>
    `;
    return novoHtml
}

// Chamar a API e exibir o nome do Pokémon no console
chamarApi().then(data => {
    if (data) {
        const areaHtml = document.getElementById('conteudo')
        areaHtml.classList.add(`${data.types[0].type['name']}`)
        areaHtml.innerHTML = InformacoesDinamicas(data);

        //Barras dinâmicas
        const barrahp = document.getElementById('hp-progresso')
        barrahp.style.width = `${data.stats[0]['base_stat']}%`

        const ataque_progresso = document.getElementById('ataque-progresso')
        ataque_progresso.style.width = `${data.stats[1]['base_stat']}%`

        const defesa_progresso = document.getElementById('defesa-progresso')
        defesa_progresso.style.width = `${data.stats[2]['base_stat']}%`

        const spAtaq_progresso = document.getElementById('spAtaq-progresso')
        spAtaq_progresso.style.width = `${data.stats[3]['base_stat']}%`

        const spDefesa_progresso = document.getElementById('spDefesa-progresso')
        spDefesa_progresso.style.width = `${data.stats[4]['base_stat']}%`

        const speed_progresso = document.getElementById('speed-progresso')
        speed_progresso.style.width = `${data.stats[5]['base_stat']}%`
    }
});
