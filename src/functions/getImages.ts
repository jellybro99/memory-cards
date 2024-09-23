interface CardData {
    id: number;
    name: string;
    image: string;
    clicked: boolean;
}

export async function getImages(numImages: number) {
    const apiPokemon: string = "https://pokeapi.co/api/v2/pokemon/";
    const apiPokemonPhoto: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const cards: CardData[] = [];
    const pokemonIds: number[] = [];

    while(pokemonIds.length < numImages){
        const pokemonId = Math.floor(Math.random() * 1025) + 1
        if(pokemonIds.indexOf(pokemonId) === -1) pokemonIds.push(pokemonId);
    }

    for(let i = 0; i < numImages; i++){
        fetch(apiPokemon + pokemonIds[i]).then(response => response.json()).then(data => {
            cards.push({
                id:pokemonIds[i],
                name:data.name,
                image:apiPokemonPhoto + pokemonIds[i] + ".png",
                clicked:false
            })
        });
    }
    return cards;
}