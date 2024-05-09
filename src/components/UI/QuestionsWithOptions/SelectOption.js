// import Card from "../Card";

const SelectOption = (props) => {
    return (
        <div>
            <input type={props.type} id={props.id} value={props.value}/>
            <label for={props.for}>{props.label}</label>
        </div>
    );
}

export default SelectOption;