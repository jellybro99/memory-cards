import "../styles/Card.css"

interface Props {
    image: string;
    name: string;
    handleClick: () => void;
}
function Card(props: Props) {
    const {image, name, handleClick} = props;

    return (
        <div className="card" onClick={handleClick}>
            <img src={image}></img>
            <h1>{name}</h1>
        </div>
    )
}

export default Card;