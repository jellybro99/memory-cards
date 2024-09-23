import { useState, useEffect } from "react";
import { getRandomPokemans } from "../functions/getRandomPokemans";
import Card from "./Card";

interface CardData {
    id: number;
    name: string;
    image: string;
    clicked: boolean;
}

function GameBoard(props) {
    //const {scores, setScores} = props;
    const [cards, setCards] = useState<CardData[]>([]);

    useEffect(() => {
        getRandomPokemans(8, setCards);
    }, []);

    /*
    const handleClick = (card) => {
        if(!card.clicked){
            setScores({...scores, [scores]: scores + 1})
            //flip and randomize
        }
        if(card.clicked){
            setScores({...scores, [scores]: 0})
            //reset cards
        }
    }*/
    //{cards.map((card)=>(<Card key={card.id} name={card.name} image={card.image}/>))}

    return (
        <div className="">
            {cards.map((card)=>(<Card key={card.id} name={card.name} image={card.image}/>))}
        </div>
    )
}

export default GameBoard;