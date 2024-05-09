import Button from "../UI/Button";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="login">
        <Button onClick={props.onShowLogin} custom="login-btn">
          LogIn
        </Button>
        <Button onClick={props.onShowSignup} custom="signup-btn">
          SignUp
        </Button>
      </div>
    </div>
  );
};

export default Header;
