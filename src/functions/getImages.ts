interface Card {
    id: number;
    name: string;
    image: string;
    clicked: boolean;
}

export function getImages(numImages: number) {
    const cards: Card[] = [];
    for(let i = 0; i < numImages; i++){
        //get image
        const name: string = "";
        const image: string = "";
        cards.push({
            id: i,
            name: name,
            image: image,
            clicked: false
        });
    }
    return cards;
}