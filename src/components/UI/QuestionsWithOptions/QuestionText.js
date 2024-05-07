import "./QuestionText.css";

const QuestionText = (props) => {
    return (
        <p className="question">{props.question}</p>
    );
}

export default QuestionText;