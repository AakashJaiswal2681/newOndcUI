import "./Question.css";

import Card from "../../../UI/Card";
import QuestionText from "../QuestionText";
import SelectInput from "../SelectOption";

const Question = () => {
  return (
    <>
      <Card custom="card-style-question">
        <QuestionText question="Question with single select options" />
        <SelectInput type="radio" id="1" label="option1" />
        <SelectInput type="radio" id="2" label="option2" />
        <SelectInput type="radio" id="3" label="option3" />
      </Card>
      <Card custom="card-style-question">
        <QuestionText question="Question with multi select options" />
        <SelectInput type="checkbox" id="4" label="option1" />
        <SelectInput type="checkbox" id="5" label="option2" />
        <SelectInput type="checkbox" id="6" label="option3" />
      </Card>
      <Card custom="card-style-question">
        <QuestionText question="Text Input/ Phone Input/ Email Input" />
        <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">Text Input</a>
            <a href="#">Phone Input</a>
            <a href="#">Email Input</a>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Question;
