import './Card.css';

const Card = (props) => {
    return (
        <div className={props.custom + " card"}>
            {props.children}
        </div>
    );
}

export default Card;