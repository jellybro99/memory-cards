interface CardData {
    id: number;
    name: string;
    image: string;
    clicked: boolean;
}

export async function getRandomPokemans(numPokemans: number):Promise<CardData[]> {
    const apiPokemon: string = "https://pokeapi.co/api/v2/pokemon/";
    const apiPokemonPhoto: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const pokemonIds: number[] = [];

    while(pokemonIds.length < numPokemans){
        const pokemonId = Math.floor(Math.random() * 1025) + 1
        if(!pokemonIds.includes(pokemonId)) pokemonIds.push(pokemonId);
    }

    const pokemonPromises = pokemonIds.map((id) => {
        return fetch(apiPokemon + id).then(response => response.json()).then(data => {
            return {
                id: id,
                name: "" + data.name,
                image: apiPokemonPhoto + id + ".png",
                clicked:false
            }
        });
    })

    return await Promise.all(pokemonPromises);
}