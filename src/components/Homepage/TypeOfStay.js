import Button from "../UI/Button";
import Card from "../UI/Card";

import "./TypeOfStay.css";

const TypeOfStay = (props) => {
  return (
    <Card custom='card-style-type-stay'>
      <div>
        <img className="image-section" src={props.image} alt="depiction of the stay" />
      </div>
      <div className="details">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <Button custom='list-btn'>{props.button}</Button>
      </div>
    </Card>
  );
};

export default TypeOfStay;
