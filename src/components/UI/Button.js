import './Button.css';

const Button = (props) => {
    return (
        <button type={props.type} className={props.custom + " button"} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;