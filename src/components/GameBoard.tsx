import { useState, useEffect } from "react";
import Card from "./Card";

function GameBoard(props) {
    const {scores, setScores} = props;
    const [cards, setCards] = useState([
        {
            id:1,
            name: "",
            image: "",
            clicked:false
        },
        {
            id:2,
            name: "",
            image: "",
            clicked:false
        }
    ])

    useEffect(()=>{
        //get images and names here.
    }, [])

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