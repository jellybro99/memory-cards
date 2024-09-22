import { useState, useEffect } from "react";
import { getImages } from "../functions/getImages";
import Card from "./Card";

function GameBoard(props) {
    const {scores, setScores} = props;
    const [cards, setCards] = useState(getImages(8));

    //randomize cards

    const handleClick = (card) => {
        if(!card.clicked){
            setScores({...scores, [scores]: scores + 1})
            //flip and randomize
        }
        if(card.clicked){
            setScores({...scores, [scores]: 0})
            //reset cards
        }
    }

    return (
        <div>
            {cards.map((card)=><Card card={card} onClick={()=>handleClick(card)}/>)}
        </div>
    )
}

export default GameBoard;