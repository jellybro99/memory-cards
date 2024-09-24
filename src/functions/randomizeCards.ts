interface CardData {
    id: number;
    name: string;
    image: string;
    clicked: boolean;
}

export function randomizeCards(arr: CardData[]): CardData[] {
    const shuffled = [...arr];

    let currentIndex = shuffled.length;

    while(currentIndex != 0){
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [shuffled[currentIndex], shuffled[randomIndex]] = [
            shuffled[randomIndex], shuffled[currentIndex]];
    }
    return shuffled;
}