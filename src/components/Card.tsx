
interface Props {
    image: string;
    name: string;
}
function Card(props: Props) {
    const {image, name} = props;

    return (
        <div className="card">
            <img src={image}></img>
            <h1>{name}</h1>
        </div>
    )
}

export default Card;