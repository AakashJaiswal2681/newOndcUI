import Button from '../UI/Button';
import './Header.css';

const Header = (props) => {

    return (
        <div className="header">
            <div className="logo"></div>
            <div className="login">
                <Button onClick={props.onShow} custom ='btn'>SignUp/LogIn</Button>
            </div>
        </div>
    );
}

export default Header;