import Button from "../UI/Button";
import Card from "../UI/Card";

import "./TypeOfStay.css";

const TypeOfStay = (props) => {

  document.addEventListener('DOMContentLoaded', function() {
    const signUp = document.getElementById('1');
    
    signUp.addEventListener('click', function () {
      window.location.pathname = '/signup';

      console.log('value :', signUp);
    });
  });


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
