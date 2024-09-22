
interface Props {
    image: string;
    name: string;
}
function Card(props: Props) {
    const {image, name, onClick} = props;

    return (
        <div>
            <img src={image}></img>
            <h1>{name}</h1>
        </div>
    )
}

export default Card;