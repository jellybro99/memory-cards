import { useState, useEffect } from "react";
import { getImages } from "../functions/getImages";
import Card from "./Card";

interface CardData {
    id: number;
    name: string;
    image: string;
    clicked: boolean;
}

function GameBoard(props) {
    const {scores, setScores} = props;
    const [cards, setCards] = useState<CardData[]>([]);

    useEffect(() => {
        getImages(8).then((cards)=>{
            setCards(cards)
        })
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
        <div>
            {cards.map((card)=>(<Card key={card.id} name={card.name} image={card.image}/>))}
        </div>
    )
}

export default GameBoard;