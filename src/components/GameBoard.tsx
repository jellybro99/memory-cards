import { useState, useEffect } from "react";
import { getRandomPokemans } from "../functions/getRandomPokemans";
import { randomizeCards } from "../functions/randomizeCards";
import Card from "./Card";
import "../styles/GameBoard.css"

interface CardData {
    id: number;
    name: string;
    image: string;
    clicked: boolean;
}

interface Props {
    scores: {
        score: number;
        highScore: number;
    };
    setScores: (score: {
        score:number;
        highScore: number;
    }) => void;
}

function GameBoard(props: Props) {
    const {scores, setScores} = props;
    const [cards, setCards] = useState<CardData[]>([]);

    useEffect(() => {
        getRandomPokemans(8).then(newCards => setCards(newCards));        
    }, []);

    
    const handleClick = (card: CardData) => {
        if(!card.clicked){
            setScores({
                score: scores.score + 1,
                highScore: Math.max(scores.score + 1, scores.highScore)
            });
            setCards(randomizeCards(cards.map(c => 
                c.id === card.id ? { ...c, clicked: true } : c
            )));
        }
        if(card.clicked){
            setScores({
                score: 0,
                highScore: scores.highScore
            });
            //reset cards
            getRandomPokemans(8).then(newCards => setCards(newCards));
        }
    }

    return (
        <div className="">
            {cards.map((card)=>(<Card key={card.id} name={card.name} image={card.image} handleClick={() => handleClick(card)}/>))}
        </div>
    )
}

export default GameBoard;