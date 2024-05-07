const QuestionInput = (props) => {
    return (
        <input type={props.type} placeholder={props.placeholder} value={props.value}/>
    );
}

export default QuestionInput;