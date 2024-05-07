// import "./SingleSelectOption.css";

import Card from "../Card";

const SingleSelectOption = (props) => {
    return (
        <Card>
            <input type={props.type} id={props.id} value={props.value}/>
            <label for={props.for}>{props.label}</label>
        </Card>
    );
}

export default SingleSelectOption;